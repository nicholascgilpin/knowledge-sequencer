// Description: Site wide functions

// Display Code
// Determines which node data gets presented where
current_node = null;// Reference to the current node displayed from nav_stack
nav_stack = [];   // Stack/List of skills to learn
// Replaces text inside specific tags with the new node's content
function display_node(node) {

}
// User Interface Buttons
// Links buttons to graph and display functions
// Load the next node in the learning path
function next(nav_stack) {

}

// Load the previous node in the learning path
function back(nav_stack) {

}

// Validates functions by checking if the actual output matches the expected output
function test(test_id, function_output, expected_output){
  if (function_output == expected_output){
    console.log("Test " + test_id + " passed!");
  }
  else{
    console.log("Test " + test_id + " failed!");
    console.log(function_output);
  }
}

// Test cases (To be run within this file only)
