class Node {
  constructor(data) {
    this.data = data;
    this.next = null; 
    // When instances of our Node class are created, they are orphan nodes. 
    // The data property is set to the constructor argument, but the next node is null.
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I am the next Node!");
firstNode.setNextNode(secondNode);
console.log(firstNode.getNextNode());

module.exports = Node;
