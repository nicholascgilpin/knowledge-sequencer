/** Determines which node data gets presented where */
var current_node:number = null;// Reference to the current node displayed from nav_stack
var nav_stack:Array<number> = [];   // Stack/List of skills to learn
var node_title:HTMLElement = document.getElementById('node_title');
var node_content:HTMLElement = document.getElementById('node_content');

/**
 * Replaces text inside specific tags with the new node's content
 * @param  {KnowledgeNode} node A nuggest of knowledge to read and display
 */
function display_current_node(node:KnowledgeNode) {
  node_title.innerHTML = node.title;
  node_content.innerHTML = node.content;
}

// User Interface Buttons
/**
 * Load the next node in the learning path
 * @param  {Array<number>} nav_stack list of nodes in the learning path
 */
function next(nav_stack:Array<number>) {

}

/**
 * Load the previous node in the learning path
 * @param  {Array<number>} nav_stack list of nodes in the learning path
 */
function back(nav_stack:Array<number>) {

}
