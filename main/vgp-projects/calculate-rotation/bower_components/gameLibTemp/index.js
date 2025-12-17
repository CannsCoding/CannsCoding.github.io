(function (window, opspark, gamelibTemp) {
  window.gamelibTemp = window.gamelibTemp || {
    numz: {
      calculateDistance(obj1, obj2) {
        return Math.sqrt((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2);
      },
      degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
      },
      radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
      },
      getAngleDegrees(pointA, pointB) {
        const distanceX = pointB.x - pointA.x;
        const distanceY = pointB.y - pointA.y;
        const radians = Math.atan2(distanceY, distanceX);
        const degrees = radians * 180 / Math.PI;
        return degrees;
      },

    },
    phyz: {
      /**
       * Updates a body's velocity based on applied forces and rotation.
       * @param {Object} body - The object with velocityX, velocityY, rotation.
       * @param {Number} forceOnX - Force along the X-axis.
       * @param {Number} forceOnY - Force along the Y-axis.
       */
      updateVelocity(body, forceOnX, forceOnY) {
        const angle = body.rotation * Math.PI / 180;
        const accelerationOnX = Math.cos(angle) * forceOnX;
        const accelerationOnY = Math.sin(angle) * forceOnY;

        body.velocityX += accelerationOnX;
        body.velocityY += accelerationOnY;
      },

      /**
       * Updates a body's position and rotation.
       * @param {Object} body - The object with x, y, rotation, velocityX, velocityY, rotationalVelocity.
       */
      updatePosition(body) {
        body.x += body.velocityX;
        body.y += body.velocityY;
        body.rotation += body.rotationalVelocity;
      },
      makeBody: function (type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
        return {
          type: type,
          velocityX: velocityX,
          velocityY: velocityY,
          rotationalVelocity: rotationalVelocity,
          integrity: integrity,
          density: density,
          volatility: volatility,

          /**
           * @param {Number} A number representing the force of the impact.
           * @param {Object} The other body involved in the collision.
           */
          handleCollision(impact, body) {
            // template method //
          },

          /**
           * Can be overridden in the concrete body to provide a custom update()
           * method.
           */
          update(event) {
            // template method //
          }
        };
      },
    },
  };
}(window, window._));
