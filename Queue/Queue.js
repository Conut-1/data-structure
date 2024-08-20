import { LinkedList } from "../Linked List/LinkedList.js";

export class Queue {
  queue = new LinkedList();

  enqueue(data) {
    this.queue.append(data);
  }

  dequeue() {
    return this.queue.removeFirst();
  }
}
