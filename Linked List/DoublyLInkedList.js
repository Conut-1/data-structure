class Node {
  data = null;
  next = null;
  prev = null;

  constructor(data) {
    this.data = data;
  }
}

class DoublyLinkedListError extends Error {
  constructor(message) {
    super(message);
    this.name = "DoublyLinkedListError";
  }
}

class DoublyLinkedList {
  head = new Node(null);
  tail = new Node(null);
  size = 0;

  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new DoublyLinkedListError("Index out of doubly linked list.");
    }

    if (index === this.size - 1) {
      return this.tail.prev;
    }

    let cur = this.head.next;
    let count = 0;
    while (count != index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  at(index) {
    return this._getNode(index).data;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head.next;
    this.head.next.prev = newNode;
    newNode.prev = this.head;
    this.head.next = newNode;

    this.size++;
  }

  insertLast(data) {
    const newNode = new Node(data);
    newNode.prev = this.tail.prev;
    this.tail.prev.next = newNode;
    newNode.next = this.tail;
    this.tail.prev = newNode;

    this.size++;
  }

  insert(index, data) {
    if (index === 0) {
      this.insertFirst(data);
    }

    if (index === this.size) {
      this.insertLast(data);
    }

    const newNode = new Node(data);
    const prevNode = this._getNode(index - 1);
    newNode.next = prevNode.next;
    prevNode.next.prev = newNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;

    this.size++;
  }

  removeFirst() {
    if (this.size === 0) {
      return null;
    }

    const targetNode = this.head.next;
    targetNode.next.prev = targetNode.prev;
    targetNode.prev.next = targetNode.next;

    this.size--;
    return targetNode.data;
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    }

    const targetNode = this.tail.prev;
    targetNode.next.prev = targetNode.prev;
    targetNode.prev.next = targetNode.next;

    this.size--;
    return targetNode.data;
  }

  remove(index) {
    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.size - 1) {
      return this.removeLast();
    }

    const targetNode = this._getNode(index);
    targetNode.next.prev = targetNode.prev;
    targetNode.prev.next = targetNode.next;

    this.size--;
    return targetNode.data;
  }
}
