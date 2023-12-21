class Node {
  constructor(data) {
    this.data = data;
  }
  setNextNode(node) { // implemented a method in the Node class
    this.next = node;
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I want to be linked to the first node!");
firstNode.setNextNode(secondNode);
console.log(firstNode);

module.exports = Node;
