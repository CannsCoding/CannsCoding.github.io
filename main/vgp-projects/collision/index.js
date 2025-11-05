(function(window, opspark, racket) {
  const
    engine = opspark.V6().activateResize(),
    canvas = engine.getCanvas(),
    stage = engine.getStage(),
    assets = opspark.assets(canvas),
    controls = opspark.controlFreak(),
    messenger = opspark.factory.dispatcher(),
    view = opspark.viewManager(stage, messenger),
    orbManager = opspark.orbManager(assets, messenger),
    playerOne = opspark.shipManager(assets, controls, messenger),
    space = opspark.space(messenger);

    // Create Player Two 
    const playerTwo = opspark.shipManager(assets, controls, messenger);
      playerTwo.setKeyMap({
      UP: controls.KEYS.W,
      LEFT: controls.KEYS.A,
      RIGHT: controls.KEYS.D
    });

  orbManager.spawn(15);
  playerOne.spawn();
  playerTwo.spawn();
  
  controls.activate();

  const fps = opspark.draw.fps('#000');
  stage.addChild(fps);

  engine
    .addTickHandlers(
      fps.update,
      space.update, 
      playerOne.update)
    .activateTick();
  
}(window, window.opspark, window.opspark.racket));
