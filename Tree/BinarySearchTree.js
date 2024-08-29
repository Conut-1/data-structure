class Node {
  left = null;
  right = null;
  parent = null;

  constructor(data) {
    this.key = data;
  }
}

class BinarySearchTree {
  constructor() {
    const rootNode = new Node(null);
    rootNode.parent = new Node(null);
    this.root = rootNode;
  }

  static _search(node, data) {
    let cur = node;

    while (cur.key !== null && data !== cur.key) {
      cur = data < cur.key ? cur.left : cur.right;
    }

    return cur;
  }

  static _maximum(node) {
    let cur = node;

    while (cur.right.key === null) {
      cur = cur.right;
    }

    return cur;
  }

  static _minimum(node) {
    let cur = node;

    while (cur.left.key === null) {
      cur = cur.left;
    }

    return cur;
  }

  static _successor(node) {
    if (node.right.key !== null) {
      return BinarySearchTree._minimum(node.right);
    }

    let cur = node.parent;
    let prev = node;

    while (cur.key !== null && prev === cur.right) {
      prev = cur;
      cur = cur.parent;
    }

    return cur;
  }

  static _predecessor(node) {
    if (node.left.key !== null) {
      return BinarySearchTree._maximum(node.left);
    }

    let cur = node.parent;
    let prev = node;

    while (cur.key !== null && prev === cur.left) {
      prev = cur;
      cur = cur.parent;
    }

    return cur;
  }

  search(data) {
    return BinarySearchTree._search(this.root, data).key;
  }

  insert(data) {
    let cur = this.root;
    let prev = this.root.parent;
    const newNode = new Node(data);
    newNode.left = new Node(null);
    newNode.right = new Node(null);

    while (cur.key !== null) {
      prev = cur;
      cur = data < cur.key ? cur.left : cur.right;
    }
    newNode.parent = prev;
    if (prev.key === null) {
      this.root = newNode;
    } else if (data < prev.key) {
      prev.left = newNode;
    } else {
      prev.right = newNode;
    }
  }

  _delete(node) {
    if (node.left.key === null) {
      BinarySearchTree._shift(node, node.right);
    } else if (node.right.key === null) {
      BinarySearchTree._shift(node, node.left);
    } else {
      const successor = BinarySearchTree._successor(node);
      if (successor.parent !== node) {
        BinarySearchTree._shift(successor, successor.right);
        successor.right = node.right;
        successor.right.parent = successor;
      }
      BinarySearchTree._shift(node, successor);
      successor.left = node.left;
      successor.left.parent = successor;
    }
  }

  _shift(nodeDelete, nodeShift) {
    if (nodeDelete.parent.key === null) {
      this.root = nodeShift;
    } else if (nodeDelete === nodeDelete.parent.left) {
      nodeDelete.parent.left = nodeShift;
    } else {
      nodeDelete.parent.right = nodeShift;
    }
    if (nodeShift.key !== null) {
      nodeShift.parent = nodeDelete.parent;
    }
  }

  delete(data) {
    const targetNode = BinarySearchTree._search(this.root, data);
    return this._delete(targetNode);
  }
}
