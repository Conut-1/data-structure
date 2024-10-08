import { LinkedList, LinkedListError } from "./LinkedList";

describe("linked list", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("append", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.at(0)).toBe(1);
    expect(linkedList.at(1)).toBe(2);
    expect(linkedList.at(2)).toBe(3);
    expect(linkedList.at(3)).toBe(4);

    expect(linkedList.size === 4).toBeTruthy();
  });

  it("getNode index out of linked list", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(() => linkedList._getNode(4)).toThrow(LinkedListError);
  });

  it("insertFirst", () => {
    linkedList.append(1);
    linkedList.insertFirst(2);
    linkedList.insertFirst(3);
    linkedList.insertFirst(4);

    expect(linkedList.at(0)).toBe(4);
    expect(linkedList.at(1)).toBe(3);
    expect(linkedList.at(2)).toBe(2);
    expect(linkedList.at(3)).toBe(1);

    expect(linkedList.size === 4).toBeTruthy();
  });

  it("insert", () => {
    linkedList.append(1);
    linkedList.insert(0, 2);
    linkedList.insert(2, 3);
    linkedList.insert(2, 4);
    linkedList.insert(3, 5);

    expect(linkedList.at(0)).toBe(2);
    expect(linkedList.at(1)).toBe(1);
    expect(linkedList.at(2)).toBe(4);
    expect(linkedList.at(3)).toBe(5);
    expect(linkedList.at(4)).toBe(3);

    expect(linkedList.size === 5).toBeTruthy();
  });

  it("insert index out of list", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.insert(4, 5);

    expect(() => linkedList.insert(6, 6)).toThrow(LinkedListError);
  });

  it("removeFirst", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.at(0)).toBe(1);
    expect(linkedList.at(1)).toBe(2);
    expect(linkedList.at(2)).toBe(3);
    expect(linkedList.at(3)).toBe(4);

    expect(linkedList.size === 4).toBeTruthy();

    linkedList.removeFirst();

    expect(linkedList.at(0)).toBe(2);
    expect(linkedList.at(1)).toBe(3);
    expect(linkedList.at(2)).toBe(4);
    expect(() => linkedList.at(3)).toThrow(LinkedListError);

    expect(linkedList.size === 3).toBeTruthy();
  });

  it("removeFirst remove empty list", () => {
    expect(linkedList.removeFirst()).toBeNull();
  });

  it("remove", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.at(0)).toBe(1);
    expect(linkedList.at(1)).toBe(2);
    expect(linkedList.at(2)).toBe(3);
    expect(linkedList.at(3)).toBe(4);
    expect(linkedList.at(4)).toBe(5);

    expect(linkedList.size === 5).toBeTruthy();

    linkedList.remove(0);

    expect(linkedList.at(0)).toBe(2);
    expect(linkedList.at(1)).toBe(3);
    expect(linkedList.at(2)).toBe(4);
    expect(linkedList.at(3)).toBe(5);
    expect(() => linkedList.at(4)).toThrow(LinkedListError);

    expect(linkedList.size === 4).toBeTruthy();

    linkedList.remove(2);

    expect(linkedList.at(0)).toBe(2);
    expect(linkedList.at(1)).toBe(3);
    expect(linkedList.at(2)).toBe(5);
    expect(() => linkedList.at(3)).toThrow(LinkedListError);

    expect(linkedList.size === 3).toBeTruthy();
  });

  it("remove last element", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.remove(4)).toBe(5);
    expect(() => linkedList.at(4)).toThrow(LinkedListError);
    expect(linkedList.size === 4).toBeTruthy();
  });

  it("remove out of index", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(() => linkedList.remove(5)).toThrow(LinkedListError);
    expect(() => linkedList.remove(-1)).toThrow(LinkedListError);
  });
});
