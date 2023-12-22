class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    try {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error("Invalid node type");
      }
    } catch (error) {
      console.error("Error caught:", error.message);
    }
  }
}

const firstNode = new Node('I am an instance of a Node!');
const invalidNode = "Not a Node instance";

try {
  firstNode.setNextNode(invalidNode); // will triger {throw new Error}
} catch (error) { // a second layer of catching errors
  console.error("Error caught outside the method:", error.message);
}
