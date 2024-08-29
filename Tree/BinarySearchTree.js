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

  search(data) {
    let cur = this.root;

    while (cur.key !== null && data !== cur.key) {
      cur = data < cur.key ? cur.left : cur.right;
    }

    return cur.key === null ? null : cur.data;
  }

  insert(data) {}

  delete(data) {}
}
