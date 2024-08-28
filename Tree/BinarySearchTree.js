class Node {
  left = null;
  right = null;

  constructor(data) {
    this.key = data;
  }
}

class BinarySearchTree {
  root = new Node(null);

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
