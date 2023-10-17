$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(0, 225, 300, 50)
createPlatform(300, 230, 200, 50)
createPlatform(500, 235, 200, 50)
createPlatform(700, 240, 200, 50)
createPlatform(900, 245, 200, 50)
createPlatform(1100, 250, 100, 50)
createPlatform(1100, 525, 250, 50)
createPlatform(900, 530, 200, 50)
createPlatform(700, 535, 200, 50)
createPlatform(500, 540, 200, 50)
createPlatform(300, 545, 200, 50)
createPlatform(200, 550, 100, 50)
createPlatform(0, 625, 80, 20)
createPlatform(1320, 390, 80, 20)
createPlatform(1200, 280, 80, 20)
createPlatform(1350, 660, 80, 20)

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
   
  createCollectable("kennedi", 1100, 655, 0)
  createCollectable("kennedi", 1360, 325, 0)
  createCollectable("kennedi", 10, 550, 0)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 400, 1500)
    createCannon("left", 300, 2100)
    createCannon("right", 520, 1600)
    createCannon("right", 190, 1800)
    createCannon("right", 200, 1800)
    createCannon("right", 210, 1800)
    createCannon("right", 220, 1800)
    createCannon("right", 230, 1800)
    createCannon("right", 240, 1800)
    createCannon("right", 250, 1800)
    createCannon("left", 650, 1700)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
