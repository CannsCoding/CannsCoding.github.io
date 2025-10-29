(function(window, _) {
  window.gamelibTemp = window.gameLibTemp || {
    numz: {
        calculateDistance(obj1, obj2) {
            return Math.sqrt((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2);
        }
    },
    phyz: {},
  };
}(window, window._));


/*(function(window, _) {
  window.gamelibTemp = window.gameLibTemp || {
    numz: {
        calculateDistance(obj1, obj2) {
            return ((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2) * (1/2)
        }
    },
    phyz: {},
  };
}(window, window._)); */