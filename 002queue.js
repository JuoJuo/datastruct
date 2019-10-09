class Queue {
  constructor(max = 1000) {
    this.max = max;
    this.data = new Array(max);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  enqueue(x) {
    if (this.size === this.max) {
      throw "stackOverflow";
    }
    this.size++;
    this.data[this.tail] = x;

    if (this.tail === this.max - 1) {
      this.tail = 0;
    } else {
      this.tail++;
    }
  }

  dequeue() {
    if (this.size === 0) {
      throw "stackUnderflow";
    }

    this.size--;
    const x = this.data[this.head];
    this.head++;
    return x;
  }

  get length() {
    return this.tail - this.head;
  }

  size2() {
    return this.tail - this.head;
  }

  peek() {
    return this.data[this.head];
  }
}

module.exports = Queue;