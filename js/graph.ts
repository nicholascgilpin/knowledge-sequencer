// Functions pertaining to the knowledge graph
var node_ids = -1; // Tracks the last used node ids, so that all ids can be unique
// create a node with a unique id (needed in case of duplicate titles)
class KnowledgeNode   {
  static latestID:number = -1;

  id:number;
  title:string;
  content:string;
  prerequisites:Array<number>;

  constructor (title:string, content = "", prerequisites = []){
    this.title = title;
    this.content = content;
    this.prerequisites = prerequisites;
    this.genNodeID();
  }

   genNodeID(){
     KnowledgeNode.latestID = KnowledgeNode.latestID + 1;
     this.id = KnowledgeNode.latestID;
  }
}

/** designate a node as the prerequisite knowledge for this skill node */
function prerequisite(prerequisite:number, current:number) {

}

// create a graph
class Graph {

}

// returns the node referenced by the reference
function find_node(references:number) {

}

// Find the shortest path from node with start title to node with finish title
// returns an ordered STACK of node references
function shortest_path(start:number,finish:number) {
}
