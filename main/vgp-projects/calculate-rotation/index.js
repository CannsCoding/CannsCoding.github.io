// TODO 4: add a param for your game lib last //
(function (window, opspark, gamelibTemp) {
  console.log('index.js initialized!');
  console.log(gamelibTemp)
  const
    assets = opspark.assets,
    engine = opspark.V6().activateResize(),
    canvas = engine.getCanvas(),
    stage = engine.getStage(),
    textfield = assets.makeTextfield('Degrees: ');

  stage.addChild(textfield);

  // try a different hex color if you want //
  const ship = assets.makeShip('#4286f4');

  // TODO 5: Center the ship on the stage //
  ship.x = canvas.width / 2; // set ship x to center of canvas
  ship.y = canvas.height / 2; // set ship y to center of canvas

  // TODO 6: Add the ship to the stage //
  stage.addChild(ship); // add ship to stage so we can see it

  function update(event) {
    /*
     * TODO 7: Use your game lib's getAngleDegrees to get 
     * the degrees of the angle between the ship and the 
     * mouse position, and assign it to a const called
     * degrees.
     *
     * Remember, the (x, y) location of the mouse is available
     * stage.mouseX and stage.mouseY, BUT, your getAngleDegrees()
     * method takes two points. What do you need to do to translate
     * these values such that they're packed into a point?
     */
    const degrees = gamelibTemp.numz.getAngleDegrees(
      { x: ship.x, y: ship.y }, // ship position
      { x: stage.mouseX, y: stage.mouseY } // mouse position
    );

    // TODO 8: Set the ship's rotation property to the degrees //
    ship.rotation = degrees; // rotate ship to face mouse

    /*
     * TODO 9: Uncomment the line below to update the textfield  
     * with the current angle degrees. Degrees will be a value 
     * between π and -π, or, 180 and -180.
     */
    assets.updateText(textfield, `Degrees: ${degrees.toFixed(3)}°`, canvas); // show angle
  }

  engine
    .addTickHandlers(update) // run update every tick
    .activateTick(); // start ticking

  // TODO 3: pass your game lib last with, window.my-game-lib //
}(window, window.opspark, window.gamelibTemp));
