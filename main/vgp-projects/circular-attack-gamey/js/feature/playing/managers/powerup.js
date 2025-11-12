(function(window, opspark, _) {
  const Proton = window.Proton;

  // create a namespace for the powerup manager //
  _.set(opspark, 'playa.powerup',
    /**
     * Creates and returns the powerup manager.
     */
    function(assets, fx, messenger) {
      const
        active = [],
        objects = [],
        pool = {
          active,
          objects,

          get() {
            if (objects.length > 0) {
              return objects.pop();
            }
            return makeObject();
          },

          recycle(object) {
            messenger.dispatch({ type: 'POOL', bodies: [object], source: 'powerup' });

            // remove object from active array
            const i = active.indexOf(object);
            if (i > -1) active.splice(i, 1);

            // reset object and remove from stage
            object.x = -(object.width);
            object.alpha = 1;
            object.scaleX = object.scaleY = 1;
            objects.push(object);
          }
        },

        powerupManager = {
          getNumberActive() {
            return active.length;
          },
          spawn(number = 1) {
            const spawned = [];
            for (let i = 0; i < number; i++) {
              spawned.push(pool.get());
            }
            active.push(...spawned);
            messenger.dispatch({ type: 'SPAWN', bodies: spawned, source: 'powerup' });
            return this;
          },
        };

      // build a new Dash Powerup object
      function makeObject() {
        const dash = assets.makeDashPowerup();
        dash.handleCollision = handleCollision;
        dash.integrity = 1; // can take 1 hit
        dash.type = 'powerup';
        return dash;
      }

      function handleCollision(impact, body) {
        // don't collide with other powerups
        if (body.type === this.type) return;

        if (this.integrity > 0) {
            this.integrity -= impact;
            if (this.integrity <= 0) {
            // powerup visual effect
                fx.makeEmitter(3, 5, "rgba(0, 255, 255, 0.4)", null, [
                    new Proton.RandomDrift(5, 0, 0.35)
                ]).emit({ x: this.x, y: this.y }, 0.5);

                // grant the ship the dash ability
                if (body.type === 'ship') {
                    body.hasDash = true;
                    messenger.dispatch({ type: 'DASH_UNLOCKED', target: body });
                }

                pool.recycle(this);
                messenger.dispatch({ type: 'COLLECT', source: 'powerup', target: this, incoming: body });
                }
            }
        }

      // return public API
      return powerupManager;
    }
  );

}(window, window.opspark, window._));
