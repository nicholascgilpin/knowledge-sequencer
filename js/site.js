// Description: Site wide functions

// Display Code
// Determines which node data gets presented where
current_node = null;// Reference to the current node displayed from nav_stack
nav_stack = [];   // Stack/List of skills to learn
node_title = document.getElementById('node_title');
node_content = document.getElementById('node_content');

// Replaces the current node with a new node from any source
function set_current_node(node){
  current_node = node;
}

// Replaces text inside specific tags with the new node's content
function display_current_node() {
  node_title.innerHTML = current_node.title;
  node_content.innerHTML = current_node.content;
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
// set_current_node(Node("a","This is a test node"));
// test(0,current_node.title,"a");
// display_current_node(current_node);
// test(1,document.getElementById('node_title').textContent[0],'a');
