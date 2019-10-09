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


function reverseBThree(node) {
  if (!node) return;
  if (!node.left && !node.right) return;
  reverseBThree(node.left);
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  reverseBThree(node.left);
}

function reverseBThree(node) {
  if (!node) return;
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  reverseBThree(node.left);
  reverseBThree(node.right);
}

reverseBThree(n1);


const rs = [];
// 中序遍历  打印
function out(node) {
  if (!node) return;
  out(node.left);
  rs.push(node.value)
  out(node.right);
}
out(n1);
console.log(rs)