class Node {
  data = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

export class LinkedListError extends Error {
  constructor(message) {
    super(message);
    this.name = "LinkedListError";
  }
}

export class LinkedList {
  head = new Node(null);
  tail = this.head;
  size = 0;

  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new LinkedListError("Index out of linked list.");
    }

    if (index === this.size - 1) {
      return this.tail;
    }

    let cur = this.head.next;
    let count = 0;
    while (count !== index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  at(index) {
    return this._getNode(index).data;
  }

  append(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head.next;
    this.head.next = newNode;

    if (this.size === 0) {
      this.tail = newNode;
    }

    this.size++;
  }

  insert(index, data) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index == this.size) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    const prevNode = this._getNode(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.size++;
  }

  removeFirst() {
    if (this.size === 0) {
      return null;
    }

    const targetNode = this.head.next;
    this.head.next = targetNode.next;

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

    const prevNode = this._getNode(index - 1);
    const targetNode = prevNode.next;
    if (targetNode === null) {
      throw new LinkedListError("Index out of linked list.");
    }
    prevNode.next = targetNode.next;

    if (index === this.size - 1) {
      this.tail = prevNode;
    }

    this.size--;
    return targetNode.data;
  }
}
