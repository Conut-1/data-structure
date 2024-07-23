class StackWithArray {
  stack = [];

  peek() {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    const data = this.stack.pop();
    return data ? data : null;
  }
}
