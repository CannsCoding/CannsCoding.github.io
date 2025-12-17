(function (window) {
  // make sure gamelibTemp exists
  window.gamelibTemp = window.gamelibTemp || {};

  // add the numz module
  window.gamelibTemp.numz = window.gamelibTemp.numz || {
    calculateDistance: function (obj1, obj2) {
      return Math.sqrt((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2);
    },
    degreesToRadians: function (degrees) {
      return degrees * Math.PI / 180;
    },
    radiansToDegrees: function (radians) {
      return radians * 180 / Math.PI;
    },
    getAngleDegrees: function (pointA, pointB) {
      const distanceX = pointB.x - pointA.x;
      const distanceY = pointB.y - pointA.y;
      const radians = Math.atan2(distanceY, distanceX);
      return radians * 180 / Math.PI;
    }
  };

  // add the phyz module (optional)
  window.gamelibTemp.phyz = window.gamelibTemp.phyz || {
    updateVelocity: function (body, forceOnX, forceOnY) {
      const angle = body.rotation * Math.PI / 180;
      body.velocityX += Math.cos(angle) * forceOnX;
      body.velocityY += Math.sin(angle) * forceOnY;
    },
    updatePosition: function (body) {
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
      if (!type) throw new Error('You must provide a valid String for the type parameter!');
      return {
        type: type,
        velocityX: velocityX,
        velocityY: velocityY,
        rotationalVelocity: rotationalVelocity,
        integrity: integrity,
        density: density,
        volatility: volatility,
        handleCollision: function (impact, body) { },
        update: function (event) { }
      };
    }
  };
}(window));
