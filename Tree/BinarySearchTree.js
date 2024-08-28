class Node {
  left = null;
  right = null;

  constructor(data) {
    this.key = data;
  }
}

class BinarySearchTree {
  root = null;

  search(data) {
    let cur = this.root;

    while (cur !== null && data !== cur.key) {
      cur = data < cur.key ? cur.left : cur.right;
    }

    return cur === null ? null : cur.data;
  }

  insert(data) {}

  delete(data) {}
}
