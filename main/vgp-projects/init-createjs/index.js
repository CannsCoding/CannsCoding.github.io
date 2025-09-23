/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas")
  const stage = new createjs.Stage(canvas)

  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //

  // CREATE HEAD SHAPE (TRAPEZOIDS) //
  const bg = new createjs.Shape()
  bg.graphics
    .beginFill("white")             // Head color white
    .setStrokeStyle(3)
    .beginStroke("black")           // Black outline
    // COMBINED TRAPEZOIDS AS ONE PATH //
    .moveTo(200, 50)   
    .lineTo(300, 50)   
    .lineTo(400, 150)  
    .lineTo(300, 350)  
    .lineTo(200, 350)  
    .lineTo(100, 150)  
    .closePath()

  // CENTER HEAD //
  bg.x = canvas.width / 2 - 250
  bg.y = canvas.height / 2 - 200

  // Store original head position for jitter //
  bg.originalX = bg.x
  bg.originalY = bg.y

  // CREATE A CONTAINER FOR THE FACE (eyes + mouth) //
  const faceContainer = new createjs.Container()
  faceContainer.x = bg.x
  faceContainer.y = bg.y + 50  // shift face down 50px

  const leftEye = new createjs.Shape()
  const rightEye = new createjs.Shape()

  leftEye.graphics
    .beginFill("blue")
    .setStrokeStyle(2)
    .beginStroke("black")
    .drawRect(180, 75, 60, 10)

  rightEye.graphics
    .beginFill("rgba(255, 183, 117, 1)")
    .setStrokeStyle(2)
    .beginStroke("black")
    .drawCircle(290, 80, 25)

  // Store original positions for jitter //
  leftEye.originalX = leftEye.x
  leftEye.originalY = leftEye.y
  rightEye.originalX = rightEye.x
  rightEye.originalY = rightEye.y

  const mouth = new createjs.Shape()
  mouth.graphics
    .beginFill("white")
    .setStrokeStyle(2)
    .beginStroke("black")
    .moveTo(180, 200)
    .lineTo(320, 200)
    .lineTo(300, 250)
    .lineTo(200, 250)
    .closePath()

  // Store original mouth position for jitter //
  mouth.originalX = mouth.x
  mouth.originalY = mouth.y

  faceContainer.addChild(leftEye, rightEye, mouth)
  stage.addChild(bg, faceContainer)

  stage.update()

  // TODO 8: Listen to the 'tick' event //
  let tickHandler = createjs.Ticker.on("tick", onTick)
  let frameCount = 0

  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
    update(event)
  }

  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event) {
    frameCount++

    // Slower jitter for eyes, head, and mouth //
    if (frameCount % 5 === 0) {
      // Eyes jitter
      leftEye.x = leftEye.originalX + (Math.random() * 6 - 3)
      leftEye.y = leftEye.originalY + (Math.random() * 6 - 3)
      rightEye.x = rightEye.originalX + (Math.random() * 6 - 3)
      rightEye.y = rightEye.originalY + (Math.random() * 6 - 3)

      // Head jitter
      bg.x = bg.originalX + (Math.random() * 4 - 2)
      bg.y = bg.originalY + (Math.random() * 4 - 2)

      // Mouth jitter
      mouth.x = mouth.originalX + (Math.random() * 4 - 2)
      mouth.y = mouth.originalY + (Math.random() * 4 - 2)
    }

    stage.update()
  }

}(window, window.createjs));
