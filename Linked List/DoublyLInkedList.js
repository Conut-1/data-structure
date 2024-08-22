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
  tail = this.head;
  size = 0;

  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new DoublyLinkedListError("Index out of doubly linked list.");
    }

    if (index === this.size - 1) {
      return this.tail;
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
    newNode.prev = this.head;
    this.head.next = newNode;

    if (this.size === 0) {
      this.tail = newNode;
    }

    this.size++;
  }

  insertLast(data) {
    const newNode = new Node(data);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

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
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.size++;
  }

  removeFirst() {
    if (this.size === 0) {
      return null;
    }

    const targetNode = this.head.next;
    const nextNode = targetNode.next;
    this.head.next = nextNode;
    if (nextNode !== null) {
      nextNode.prev = this.head;
    }

    if (this.size === 1) {
      this.tail = this.head;
    }

    this.size--;
    return targetNode.data;
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    }

    const targetNode = this.tail;
    const prevNode = targetNode.prev;
    prevNode.next = targetNode.next;

    if (this.size === 1) {
      this.tail = this.head;
    }

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
    targetNode.prev.next = targetNode.next;
    if (targetNode.next !== null) {
      targetNode.next.prev = targetNode.prev;
    }

    if (index === this.size - 1) {
      this.tail = targetNode.prev;
    }

    this.size--;
    return targetNode.data;
  }
}
