// 12345   有个环状铁轨  问给出的顺序能否达到。

const Queue = require('../002queue');

/**

   结束条件选择很重要，否则就会增加代码量与逻辑
   我们直接遍历需要对比的顺序数组，完了如果缓冲队列里还有值那就是搞不定
 */
function isTrains(o, t) {
  const queue = new Queue();

  for (x of t) {
    if (queue.peek() === x) {
      queue.dequeue();
      continue;
    }

    let y = null;
    while (o.size2() > 0 && (y = o.dequeue()) !== x) {
      queue.enqueue(y);
    }
  }

  return queue.size2() === 0;
}


let q1 = new Queue();
for(let i = 1; i < 6; i++) {
  q1.enqueue(i);
}

let r = isTrains(q1, [3,2,1,4,5]);
console.log(r);