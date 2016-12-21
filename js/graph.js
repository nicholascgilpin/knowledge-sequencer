class KnowledgeNode {
    constructor(title, content = "", prerequisites = []) {
        this.title = title;
        this.content = content;
        this.prerequisites = prerequisites;
        this.genNodeID();
    }
    genNodeID() {
        KnowledgeNode.latestID = KnowledgeNode.latestID + 1;
        this.id = KnowledgeNode.latestID;
    }
}
KnowledgeNode.latestID = -1;
function prerequisite(prerequisite, current) {
}
class Graph {
}
function find_node(references) {
}
function shortest_path(start, finish) {
}
