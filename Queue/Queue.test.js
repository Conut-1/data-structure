import { Queue } from "./Queue.js";

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("dequeue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(6);
  });

  it("dequeue empty queue", () => {
    expect(queue.dequeue()).toBe(null);
  });
});
