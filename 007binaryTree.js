class BinaryTreeNode {
  constructor(key, value) {
    // 指向父
    this.p = null;
    // 左
    this.left = null;
    // 右
    this.right = null;
    
    // 键
    this.key = key;

    // 值
    this.value = value;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const node = new BinaryTreeNode(key, value);

    let p = this.root;
    let tail = this.root;
    while(tail) {

      p = tail;

      if (tail && key < tail.key) {
        tail = tail.left;
      } else {
        tail = tail.right;
      }
    }

    if (!p) {
      this.root = node;
      return;
    }

    // 插入

    if (p.key < key) {
      p.right = node;
    } else {
      p.left = node;
    }
   
    node.p = p;
  }

}