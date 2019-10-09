class Stack {
  constructor(max = 1000) {
    this.data = new Array(max);
    this.topCursor = -1;
    this.max = max;
  }

  push(x) {
    if (this.topCursor === this.max - 1) { throw 'stackOverflow' }
    this.topCursor++;
    this.data[this.topCursor] = x;
  }

  pop() {
    if (this.topCursor === -1) { throw 'stackUnderflow' }
    const x = this.data[this.topCursor];
    this.topCursor--;
    return x;
  }

  get length() {
    return this.topCursor + 1;
  }
}


module.export = Stack;