(function(window, opspark, _) {
  const
    Proton = window.Proton;

  // namespace for the GravityWell manager 
  _.set(opspark, 'playa.gravityWell',
    /**
     * Creates and returns the gravityWell manager.
     */
    function(assets, fx, messenger) {
      const
        active = [],
        objects = [],
        pool = {
          active,
          objects,

          get: function() {
            if (objects.length > 0) {
              return objects.pop();
            }
            return makeObject();
          },

          recycle: function(object) {
            messenger.dispatch({ type: 'POOL', bodies: [object], source: 'gravityWell' });
            const i = active.indexOf(object);
            if (i > -1) {
              active.splice(i, 1);
            }
            object.x = -(object.width);
            object.alpha = 1;
            object.scaleX = object.scaleY = 1;
            objects.push(object);
          }
        },

        gravityWellManager = {
          getNumberActive() {
            return active.length;
          },

          spawn(number = 1) {
            const spawned = [];
            for (let i = 0; i < number; i++) {
              spawned.push(pool.get());
            }
            active.push(...spawned);
            messenger.dispatch({ type: 'SPAWN', bodies: spawned, source: 'gravityWell' });
            return this;
          },

          // function that makes the gravity
          updateAll(things, delta) {
            for (let i = 0; i < active.length; i++) {
              const well = active[i];

              // how far the gravity reaches
              const radius = 350;

              // change this number to increase/decrease gravity
              const pullStrength = 0.35;

              for (let j = 0; j < things.length; j++) {
                const obj = things[j];

                const dx = well.x - obj.x;
                const dy = well.y - obj.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < radius && dist > 1) {
                  obj.x += (dx / dist) * pullStrength * delta;
                  obj.y += (dy / dist) * pullStrength * delta;
                }
              }
            }
          }
        };
      
      function makeObject() {
        const gravityWell = assets.makeGravityWell();
        gravityWell.handleCollision = handleCollision;
        return gravityWell;
      }
      
      function handleCollision(impact, body) {
        if (body.type === this.type) return;

        if (this.integrity > 0) {
          console.log(impact);
          this.integrity -= impact;
          if (this.integrity <= 0) {
            fx
              .makeEmitter(2, 3, "rgba(214, 36, 84, 0.2)", null, [
                new Proton.RandomDrift(5, 0, .35)
              ])
              .emit({ x: this.x, y: this.y }, 0.5);
            pool.recycle(this);
            messenger.dispatch({ type: 'EXPLOSION', source: 'gravityWell', target: this, incoming: body });
          }
        }
      }

      // return GravityWell manager
      return gravityWellManager;
    }
  );

}(window, window.opspark, window._));
