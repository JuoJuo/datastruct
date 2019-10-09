const Stack = require("./001stack");

// 1.栈模拟队列
class mockQueue {
  constructor(max = 1000) {
    this.s1 = new Stack(max);
    this.s2 = new Stack(max);
  }

  enqueue(x) {
    this.s1.push(x);
  }

  dequeue() {
    if (this.s2.length !== 0) return this.s2.pop();

    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
    }

    return this.s2.pop();
  }
}

// 2.队列模拟栈
class mockStack {
  constructor(max = 1000) {
    this.q1 = new Queue(max);
    this.q2 = new Queue(max);
  }

  push(x) {
    this.q1.enqueue(x);
  }

  pop() {

    while(this.q1.length > 1){
      this.q2.push(this.q1.dequeue());
    }

    const x = this.q1.dequeue();

    this.q1 = this.q2;

    this.q2 = new Queue();

    return x;
  }
}

// 改成非递归，非栈（因为递归就是栈调用结构）
// 1 1 2 3 5 8 13 21
function feb(n) {
    return feb(n) = n > 2 ? feb(n-1) + feb(n-2): 1;
}

function feb2(n) {
  if (n <=2) {
    return 1;
  }
  let a = 1; b = 1, c = a + b;
  for(let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

// 如果是单递归，我们可以创建一个栈，循环往里面push函数的执行

// 【（）】 =》 匹配问题

function isDuiChen (str) {
  const arr = str.split('');


  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '[': 
      this.data.push(arr[i])
      break
      case '(': 
      this.data.push(arr[i])
      break
      case ']': 
        if (this.data.pop() !== '[') {
          return false;
        }
        break
      case ')': 
        if(this.data.pop() !== '(') {
          return false;
        }
        break
        default:
          return true;
    }
  }
}
