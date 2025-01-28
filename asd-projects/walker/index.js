/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

/* keybinds */
var arrowKey = {
    "up":38,
    "down":40,
    "left":37,
    "right":39
};

var textKey = {
    "up":87,
    "down":83,
    "left":65,
    "right":68
}
  

function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
 
  var walker = {
    "positionX": 0,
    "positionY": 0,
    "speedX": 0,
    "speedY": 0
  }
  var walkerP2 = {
    "positionX": 0,
    "positionY": 0,
    "speedX": 0,
    "speedY": 0
  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handleKeyDown(event) {
    if (event.which === arrowKey.up) {
      console.log("key pressed (up): " + arrowKey.up)      
      walker.speedY = -5;
    }
    if (event.which === arrowKey.down) {
      console.log("key pressed (down): " + arrowKey.down)      
      walker.speedY = 5;
    }
    if (event.which === arrowKey.left) {
      console.log("key pressed (left): " + arrowKey.left)      
      walker.speedX = -5;
    }
    if (event.which === arrowKey.right) {
      console.log("key pressed (right): " + arrowKey.right)      
      walker.speedX = 5;
    }
    if (event.which === textKey.up) {
      console.log("key pressed (up): " + textKey.up)      
      walkerP2.speedY = -5;
    }
    if (event.which === textKey.down) {
      console.log("key pressed (down): " + textKey.down)      
      walkerP2.speedY = 5;
    }
    if (event.which === textKey.left) {
      console.log("key pressed (left): " + textKey.left)      
      walkerP2.speedX = -5;
    }
    if (event.which === textKey.right) {
      console.log("key pressed (right): " + textKey.right)      
      walkerP2.speedX = 5;
    }
  }
  function handleKeyUp(event) {
    if (event.which === arrowKey.up) {
      console.log("key pressed (up): " + arrowKey.up)      
      walker.speedY = 0;
    }
    if (event.which === arrowKey.down) {
      console.log("key pressed (down): " + arrowKey.down)      
      walker.speedY = 0;
    }
    if (event.which === arrowKey.left) {
      console.log("key pressed (left): " + arrowKey.left)      
      walker.speedX = 0;
    }
    if (event.which === arrowKey.right) {
      console.log("key pressed (right): " + arrowKey.right)      
      walker.speedX = 0;
    }
    if (event.which === textKey.up) {
      console.log("key pressed (up): " + textKey.up)      
      walkerP2.speedY = 0;
    }
    if (event.which === textKey.down) {
      console.log("key pressed (down): " + textKey.down)      
      walkerP2.speedY = 0;
    }
    if (event.which === textKey.left) {
      console.log("key pressed (left): " + textKey.left)      
      walkerP2.speedX = 0;
    }
    if (event.which === textKey.right) {
      console.log("key pressed (right): " + textKey.right)      
      walkerP2.speedX = 0;
    } 
  }
  

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    wallCollision();
    playerCollision();
  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function playerCollision() {

  }

  function wallCollision() {
    if(walker.positionX < 0) {
      walker.positionX = 0;
    }
    if(walker.positionY < 0) {
      walker.positionY = 0;
    }
    if(walker.positionX > $("#board").width() - 50) {
      walker.positionX = $("#board").width()- 50;
    }
    if(walker.positionY > $("#board").height() - 50) {
      walker.positionY = $("#board").height() - 50;
    }
    if(walkerP2.positionX < 0) {
      walkerP2.positionX = 0;
    }
    if(walkerP2.positionY < 0) {
      walkerP2.positionY = 0;
    }
    if(walkerP2.positionX > $("#board").width() - 20) {
      walkerP2.positionX = $("#board").width()- 20;
    }
    if(walkerP2.positionY > $("#board").height() - 20) {
      walkerP2.positionY = $("#board").height() - 20;
    }
  }

  function repositionGameItem(){
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
    walkerP2.positionX += walkerP2.speedX;
    walkerP2.positionY += walkerP2.speedY;
  }

  function redrawGameItem() {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    var randomColor2 = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $(document).on('click', changeColor);
    function changeColor(){
      $("#walker").css("background-color", randomColor)
      $("#walkerP2").css("background-color", randomColor2)
    }
    
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
    $("#walkerP2").css("left", walkerP2.positionX);
    $("#walkerP2").css("top", walkerP2.positionY);
    
  }


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
    
}
