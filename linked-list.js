export { Node, LinkedList };
class Node {
  constructor() {
    this.key = null;
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let temp = this.head;

    while (temp !== null) {
      counter++;
      temp = temp.nextNode;
    }

    return counter;
  }
}
