/**
 * Below are test cases for for the many functions defined in this project.
 * Use these tests by uncommenting the test section for the relavant file
 */

// Validates functions by checking if the actual output matches the expected output
function test(test_id: number, function_output:any, expected_output:any){
  if (function_output === expected_output){
    console.log("Test " + test_id + " passed!");
  }
  else{
    console.log("Test " + test_id + " failed!");
    console.log(function_output);
  }
}

// Test cases site.ts
display_current_node(new KnowledgeNode("a","This is a test node"));
test(1,document.getElementById('node_title').textContent[0],'a');

// Test cases graph.js
test(2,new KnowledgeNode("a","a").title,"a");
test(3,new KnowledgeNode("a","b").content,"b");
test(4,new KnowledgeNode("a","c").id,3);
test(5,new KnowledgeNode("a","d",[1]).prerequisites[0],1);
