class Node  {
  constructor(data){
    this.data = data; // the data 
    this.next = null; // the link to the next node
  }

}

let firstNode = new Node("Unstuck");
console.log(firstNode.data);
console.log(firstNode.next);

// console.log(firstNode[next]; 
// would not work, because ... ?

module.exports = Node;
