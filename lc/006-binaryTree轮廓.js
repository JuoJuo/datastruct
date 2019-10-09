class ThreeNode {
  constructor(value, left, right) {
    this.left = left ? left: null;
    this.right = right ? right: null;
    this.value = value;
  }
}

const n8 = new ThreeNode(8);

const n7 = new ThreeNode(4);
const n6 = new ThreeNode(2);

const n5 = new ThreeNode(7);
const n4 = new ThreeNode(3, n8);

const n3 = new ThreeNode(5, n6, n7);
const n2 = new ThreeNode(9, n4, n5);

const n1 = new ThreeNode(1, n2, n3);


function lunkuo(node, d = 0, result = []) {
  if (!node) return;

  if (!result[d]) {
    result[d] = node.value;
  }

  lunkuo(node.left, d + 1, result);
  lunkuo(node.right, d + 1, result);

  return result;
}

const r = lunkuo(n1);
console.log(r)
