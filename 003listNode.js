class ListNode {
  constructor(key) {
    this.prev = null;
    this.next = null;
    this.key = key;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  insert(node) {
    node.prev = null;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
  }

  search(key) {
    let node = this.head;
    while(node !== null && node.key !== key){
      node = node.next;
    }
    return node;
  }

  delete(node) {
    const {prev, next} = node;
    delete node.prev;
    delete node.next;

    if (node === this.head) {
      this.head = next;
    }

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }
  }
}
