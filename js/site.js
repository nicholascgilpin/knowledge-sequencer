var current_node = null;
var nav_stack = [];
var node_title = document.getElementById('node_title');
var node_content = document.getElementById('node_content');
function display_current_node(node) {
    node_title.innerHTML = node.title;
    node_content.innerHTML = node.content;
}
function next(nav_stack) {
}
function back(nav_stack) {
}
