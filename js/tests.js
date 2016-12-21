function test(test_id, function_output, expected_output) {
    if (function_output === expected_output) {
        console.log("Test " + test_id + " passed!");
    }
    else {
        console.log("Test " + test_id + " failed!");
        console.log(function_output);
    }
}
display_current_node(new KnowledgeNode("a", "This is a test node"));
test(1, document.getElementById('node_title').textContent[0], 'a');
test(2, new KnowledgeNode("a", "a").title, "a");
test(3, new KnowledgeNode("a", "b").content, "b");
test(4, new KnowledgeNode("a", "c").id, 3);
test(5, new KnowledgeNode("a", "d", [1]).prerequisites[0], 1);
