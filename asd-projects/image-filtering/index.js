// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Apply the filters
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);

  // Render the image
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var row = 0; row < image.length; row++) {
    for (var col = 0; col < image[row].length; col++) {
      // Access the current pixel
      var rgbString = image[row][col];

      // Convert the string to an array of numbers
      var rgbNumbers = rgbStringToArray(rgbString);

      // Apply the filter
      filterFunction(rgbNumbers);

      // Convert the array back to a string
      rgbString = rgbArrayToString(rgbNumbers);

      // Update the image with the modified pixel
      image[row][col] = rgbString;
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  // Get the background color
  var backgroundRgb = rgbStringToArray(image[0][0]);

  for (var row = 0; row < image.length; row++) {
    for (var col = 0; col < image[row].length; col++) {
      // Access the current pixel
      var rgbString = image[row][col];

      // Convert the string to an array of numbers
      var rgbNumbers = rgbStringToArray(rgbString);

      // Check if the current pixel is not the background color
      if (rgbString !== backgroundRgb) {
        // Apply the filter
        filterFunction(rgbNumbers);
      }

      // Convert the array back to a string
      rgbString = rgbArrayToString(rgbNumbers);

      // Update the image with the modified pixel
      image[row][col] = rgbString;
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(value) {
  return value < 0 ? 0 : value > 255 ? 255 : value;
}

// TODO 3: Create reddify function
function reddify(rgbNumbers) {
  rgbNumbers[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(rgbNumbers) {
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] - 50);
}

function increaseGreenByBlue(rgbNumbers) {
  rgbNumbers[GREEN] = keepInBounds(rgbNumbers[GREEN] + rgbNumbers[BLUE]);
}