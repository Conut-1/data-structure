import { StackWithLinkedList } from "./StackWithLinkedList.js";

describe("stack with linked list", () => {
  let stack;

  beforeEach(() => {
    stack = new StackWithLinkedList();
  });

  it("peek empty stack", () => {
    expect(stack.peek()).toBeNull();
  });

  it("push", () => {
    stack.push(1);

    expect(stack.peek()).toBe(1);

    stack.push(2);

    expect(stack.peek()).toBe(2);
  });

  it("pop empty stack", () => {
    expect(stack.pop()).toBeNull();
  });

  it("pop", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
});
