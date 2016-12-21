/**
 *  create a node with a unique id (needed in case of duplicate titles)
 */
class KnowledgeNode   {
  static latestID:number = -1;

  id:number;
  title:string;
  content:string;
  prerequisites:Array<number>;

  /**
   * constructor
   * @param  {string} title            Name of knowledge
   * @param  {string} content=""       The actual text of the knowledge
   * @param  {Array<number>} prerequisites=[] prerequisites to understanding this lesson
   */
  constructor (title:string, content = "", prerequisites = []){
    this.title = title;
    this.content = content;
    this.prerequisites = prerequisites;
    this.genNodeID();
  }
/**
 * Generates a unique ID for each node
 * @return {void} IDs are static variables
 */
   genNodeID(){
     KnowledgeNode.latestID = KnowledgeNode.latestID + 1;
     this.id = KnowledgeNode.latestID;
  }
}

/**
 * designate a node as the prerequisite knowledge for this skill node
 * @param  {number} prerequisite id of the node with the prerequisite information
 * @param  {number} current      id of the current node
 */
function prerequisite(prerequisite:number, current:number) {

}

/** create a graph */
class Graph {

}

/**
 * returns the node referenced by the reference
 * @param  {number} references id number of the requested node
 * @return {KnowledgeNode}     node data for the requested ID
 */
function find_node(references:number) {

}

/**
 *  Find the shortest path from node with start title to node with finish title
 * @param  {number} start  id of node at which to start searching
 * @param  {number} finish id of node to find
 * @return {Array<number>}        an ordered list of node IDs
 */
function shortest_path(start:number,finish:number) {
}
