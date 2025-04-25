/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 1: Implement swap
/**
 * Swaps two elements in an array and visualizes the swap
 * Parameters:
 * - array: The array containing elements to swap
 * - i: Index of the first element to swap
 * - j: Index of the second element to swap
 */
function swap(array, i, j) {
    // Create a temporary variable to hold one element
    let temp = array[i];
    
    // Swap the elements
    array[i] = array[j];
    array[j] = temp;
    
    // Visualize the swap
    drawSwap(array, i, j);
}

// TODO 2: Implement bubbleSort
/**
 * Sorts an array using the bubble sort algorithm
 * Parameters:
 * - array: The array to sort
 */
async function bubbleSort(array) {
    // Outer loop from 0 to length-1
    for (let i = 0; i < array.length - 1; i++) {
        // Inner loop from length-1 down to i+1
        for (let j = array.length - 1; j > i; j--) {
            // Compare adjacent elements' values
            if (array[j].value < array[j - 1].value) {
                // Swap if the element with higher index has smaller value
                swap(array, j, j - 1);
                
                // Update counter and pause for visualization
                updateCounter(bubbleCounter);
                await sleep();
            }
        }
    }
}

// TODO 3: Implement quickSort
/**
 * Sorts an array using the quicksort algorithm
 * Parameters:
 * - array: The array to sort
 * - left: The leftmost index of the portion to sort
 * - right: The rightmost index of the portion to sort
 */
async function quickSort(array, left, right) {
    // Only run if there are at least 2 elements to sort
    if (right - left > 0) {
        // Get partition index
        var index = await partition(array, left, right);
        
        // Sort elements to the left of partition
        if (left < (index - 1)) {
            await quickSort(array, left, index - 1);
        }
        
        // Sort elements to the right of partition
        if (index < right) {
            await quickSort(array, index, right);
        }
    }
}

// TODOs 4 & 5: Implement partition
/**
 * Partitions array for quicksort and performs partial sorting
 * Parameters:
 * - array: The array to partition
 * - left: The leftmost index of the portion to partition
 * - right: The rightmost index of the portion to partition
 * Returns: The partition index for quicksort
 */
async function partition(array, left, right) {
    // Choose pivot value (middle element)
    let pivot = array[Math.floor((right + left) / 2)].value;
    
    // Continue until left and right indices cross
    while (left < right) {
        // Find element on left that should be on right
        while (array[left].value < pivot) {
            left++;
        }
        
        // Find element on right that should be on left
        while (array[right].value > pivot) {
            right--;
        }
        
        // Swap elements if left index is still less than right index
        if (left < right) {
            swap(array, left, right);
            updateCounter(quickCounter);
            await sleep();
        }
    }
    
    // Return new partition index
    return left + 1;
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}