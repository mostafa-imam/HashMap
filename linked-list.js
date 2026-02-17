export { Node, LinkedList }
class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node();
        node.value = value;

        if (this.head === null) {
            this.head = node;
            return;
        }

        let temp = this.head;

        while (temp.nextNode !== null) {
            temp = temp.nextNode;
        }

        temp.nextNode = node;
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