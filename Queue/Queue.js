import { LinkedList } from "../Linked List/LinkedList.js";

class Queue {
  queue = new LinkedList();

  enqueue(data) {
    this.queue.append(data);
  }

  dequeue() {
    return this.queue.removeFirst();
  }
}
