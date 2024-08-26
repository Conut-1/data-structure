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
});
