// Functions pertaining to the knowledge graph
node_ids = -1; // Tracks the last used node ids, so that all ids can be unique
// create a node with a unique id (needed in case of duplicate titles)
function Node(title = "",content = "", prerequisites = []) {
  var node = {};
  node.title = title;
  node.content = content;
  node.prerequisites = prerequisites;
  node_ids = node_ids + 1;
  node.id = node_ids;
  return node;
}

// designate a node as the prerequisite knowledge for this skill node
function prerequisite(prerequisite, current) {

}

// create a graph
function Graph() {

}

// returns the node referenced by the reference
function find_node(references) {

}

// Find the shortest path from node with start title to node with finish title
// returns an ordered STACK of node references
function shortest_path(start,finish) {
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
// test(0,Node("a","a").title,"a");
// test(1,Node("a","b").content,"b");
// test(2,Node("a","c").id,2);
// test(3,Node("a","d",[1]).prerequisites[0],1);
