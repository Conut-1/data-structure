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

  search(data) {
    return BinarySearchTree._search(this.root, data).key;
  }

  insert(data) {}

  delete(data) {}
}
