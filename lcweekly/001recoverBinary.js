//     3           4
//   4    5       2  1
// 2   1
        
//  子树要一样，多一个都不行，少一个也不行
class ThreeNode {
  constructor(value, left, right) {
    this.left = left ? left: null;
    this.right = right ? right: null;
    this.value = value;
  }
}

const n2 = new ThreeNode(2);
const n1 = new ThreeNode(1);
const n4 = new ThreeNode(4, n2, n1);


const n5 = new ThreeNode(5);
const n3 = new ThreeNode(3, n4, n5);



const n2111 = new ThreeNode(2);
const n1111 = new ThreeNode(1);
const n4111 = new ThreeNode(4, n2, n1);



function traverse(s, t) {
  if (!s) return;

  if (isSame(s, t)) {
    return true;
  }
  
  return traverse(s.left, t) || traverse(s.right, t);
}

function isSame(s, t) {
  if (!s && !t) {
    return false;
  } else if (!s || !t) {
    return false;
  }else if(s.value === t.value){
    return isSame(s.left, t.left) && isSame(s.right, t.right);
  } else {
    return false;
  }
}

console.log(traverse(n3, n4111))