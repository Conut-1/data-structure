import { LinkedList } from "../Linked List/LinkedList.js";

class StackWithLinkedList {
  stack = new LinkedList();

  peek() {
    if (this.stack.size === 0) {
      return null;
    }
    return this.stack.at(0);
  }

  push(data) {
    this.stack.insertFirst(data);
  }

  pop() {
    if (this.stack.size === 0) {
      return null;
    }
    return this.stack.removeFirst();
  }
}
