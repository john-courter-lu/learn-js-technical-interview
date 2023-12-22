class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("message");
    }
  }
}

const firstNode = new Node("I am an instance of a Node!");
const testingString = "a string, not a node"
firstNode.setNextNode(testingString)
console.log(firstNode.next);

module.exports = Node;
