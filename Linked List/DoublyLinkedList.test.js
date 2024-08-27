import { DoublyLinkedList, DoublyLinkedListError } from "./DoublyLInkedList.js";

describe("linked list", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it("insertFirst", () => {
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.insertFirst(4);
    list.insertFirst(5);

    expect(list.at(0)).toBe(5);
    expect(list.at(1)).toBe(4);
    expect(list.at(2)).toBe(3);
    expect(list.at(3)).toBe(2);
    expect(list.at(4)).toBe(1);

    expect(list.size === 5).toBeTruthy();
  });

  it("insertFirst node linked", () => {
    const elements = [1, 2, 3, 4, 5];
    elements.forEach((value) => {
      list.insertFirst(value);
    });

    let cur = list.head.next;
    let count = 0;
    while (cur !== list.tail) {
      expect(cur.data === elements[list.size - count - 1]).toBeTruthy();
      cur = cur.next;
      count++;
    }

    expect(count === 5).toBeTruthy();

    cur = list.tail.prev;
    count = 0;
    while (cur !== list.head) {
      expect(cur.data === elements[count]).toBeTruthy();
      cur = cur.prev;
      count++;
    }

    expect(count === 5).toBeTruthy();
  });

  it("insertLast", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insertLast(5);

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(3);
    expect(list.at(3)).toBe(4);
    expect(list.at(4)).toBe(5);

    expect(list.size === 5).toBeTruthy();
  });

  it("insertLast node linked", () => {
    const elements = [1, 2, 3, 4, 5];
    elements.forEach((value) => {
      list.insertLast(value);
    });

    let cur = list.head.next;
    let count = 0;
    while (cur !== list.tail) {
      expect(cur.data === elements[count]).toBeTruthy();
      cur = cur.next;
      count++;
    }

    expect(count === 5).toBeTruthy();

    cur = list.tail.prev;
    count = 0;
    while (cur !== list.head) {
      expect(cur.data === elements[list.size - count - 1]).toBeTruthy();
      cur = cur.prev;
      count++;
    }

    expect(count === 5).toBeTruthy();
  });

  it("getNode index out of linked list", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insertLast(5);

    expect(() => list._getNode(-2)).toThrow(DoublyLinkedListError);
    expect(() => list._getNode(-1)).toThrow(DoublyLinkedListError);
    expect(() => list._getNode(5)).toThrow(DoublyLinkedListError);
    expect(() => list._getNode(6)).toThrow(DoublyLinkedListError);

    expect(list.size === 5).toBeTruthy();
  });

  it("insert", () => {
    list.insert(0, 1);
    list.insert(0, 2);
    list.insert(2, 3);
    list.insert(2, 4);
    list.insert(3, 5);

    expect(list.at(0)).toBe(2);
    expect(list.at(1)).toBe(1);
    expect(list.at(2)).toBe(4);
    expect(list.at(3)).toBe(5);
    expect(list.at(4)).toBe(3);

    expect(list.size === 5).toBeTruthy();
  });

  it("insert node linked", () => {
    const elements = [];
    const insertInstruction = [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
      [3, 5],
    ];

    insertInstruction.forEach(([index, data]) => {
      list.insert(index, data);
      elements.splice(index, 0, data);
    });

    let cur = list.head.next;
    let count = 0;
    while (cur !== list.tail) {
      expect(cur.data === elements[count]).toBeTruthy();
      cur = cur.next;
      count++;
    }

    expect(count === 5).toBeTruthy();

    cur = list.tail.prev;
    count = 0;
    while (cur !== list.head) {
      expect(cur.data === elements[list.size - count - 1]).toBeTruthy();
      cur = cur.prev;
      count++;
    }

    expect(count === 5).toBeTruthy();
  });

  it("insert index out of list", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insert(4, 5);

    expect(() => list.insert(6, 6)).toThrow(DoublyLinkedListError);
    expect(() => list.insert(-1, 6)).toThrow(DoublyLinkedListError);

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(3);
    expect(list.at(3)).toBe(4);
    expect(list.at(4)).toBe(5);

    expect(list.size === 5).toBeTruthy();
  });

  it("removeFirst", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);

    list.removeFirst();

    expect(list.at(0)).toBe(2);
    expect(list.at(1)).toBe(3);
    expect(list.at(2)).toBe(4);
    expect(() => list.at(3)).toThrow(DoublyLinkedListError);

    expect(list.size === 3).toBeTruthy();
  });

  it("removeFirst node linked", () => {
    const elements = [1, 2, 3, 4];
    elements.forEach((value) => {
      list.insertLast(value);
    });

    list.removeFirst();
    elements.shift();

    let cur = list.head.next;
    let count = 0;
    while (cur !== list.tail) {
      expect(cur.data === elements[count]).toBeTruthy();
      cur = cur.next;
      count++;
    }

    expect(count === 3).toBeTruthy();

    cur = list.tail.prev;
    count = 0;
    while (cur !== list.head) {
      expect(cur.data === elements[list.size - count - 1]).toBeTruthy();
      cur = cur.prev;
      count++;
    }

    expect(count === 3).toBeTruthy();
  });

  it("removeFirst remove empty list", () => {
    expect(list.removeFirst()).toBeNull();
  });

  it("removeLast", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);

    list.removeLast();

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(3);
    expect(() => list.at(3)).toThrow(DoublyLinkedListError);

    expect(list.size === 3).toBeTruthy();
  });

  it("removeLast node linked", () => {
    const elements = [1, 2, 3, 4];
    elements.forEach((value) => {
      list.insertLast(value);
    });

    list.removeLast();
    elements.pop();

    let cur = list.head.next;
    let count = 0;
    while (cur !== list.tail) {
      expect(cur.data === elements[count]).toBeTruthy();
      cur = cur.next;
      count++;
    }

    expect(count === 3).toBeTruthy();

    cur = list.tail.prev;
    count = 0;
    while (cur !== list.head) {
      expect(cur.data === elements[list.size - count - 1]).toBeTruthy();
      cur = cur.prev;
      count++;
    }

    expect(count === 3).toBeTruthy();
  });

  it("removeLast remove empty list", () => {
    expect(list.removeLast()).toBeNull();
  });

  it("remove", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insertLast(5);

    list.remove(1);

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(3);
    expect(list.at(2)).toBe(4);
    expect(list.at(3)).toBe(5);
    expect(() => list.at(4)).toThrow(DoublyLinkedListError);

    expect(list.size === 4).toBeTruthy();

    list.remove(2);

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(3);
    expect(list.at(2)).toBe(5);
    expect(() => list.at(3)).toThrow(DoublyLinkedListError);

    expect(list.size === 3).toBeTruthy();
  });

  it("remove first element", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insertLast(5);

    expect(list.remove(0)).toBe(1);

    expect(list.at(0)).toBe(2);
    expect(list.at(1)).toBe(3);
    expect(list.at(2)).toBe(4);
    expect(list.at(3)).toBe(5);

    expect(() => list.at(4)).toThrow(DoublyLinkedListError);
    expect(list.size === 4).toBeTruthy();
  });

  it("remove last element", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insertLast(5);

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(3);
    expect(list.at(3)).toBe(4);

    expect(list.remove(4)).toBe(5);
    expect(() => list.at(4)).toThrow(DoublyLinkedListError);
    expect(list.size === 4).toBeTruthy();
  });

  it("remove node linked", () => {
    const elements = [1, 2, 3, 4, 5];
    const removeInstruction = [1, 0, 2];

    elements.forEach((value) => {
      list.insertLast(value);
    });
    removeInstruction.forEach((value) => {
      list.remove(value);
      elements.splice(value, 1);
    });

    let cur = list.head.next;
    let count = 0;
    while (cur !== list.tail) {
      expect(cur.data === elements[count]).toBeTruthy();
      cur = cur.next;
      count++;
    }

    expect(count === 2).toBeTruthy();

    cur = list.tail.prev;
    count = 0;
    while (cur !== list.head) {
      expect(cur.data === elements[list.size - count - 1]).toBeTruthy();
      cur = cur.prev;
      count++;
    }

    expect(count === 2).toBeTruthy();
  });

  it("remove out of index", () => {
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insertLast(5);

    expect(() => list.remove(5)).toThrow(DoublyLinkedListError);
    expect(() => list.remove(-1)).toThrow(DoublyLinkedListError);
  });
});
