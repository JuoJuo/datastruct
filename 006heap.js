/**
 * 二叉树  性质
 *
 * 索引为i的节点的左节点的索引 left = index * 2 + 1  (如果我们数组的索引起始是0的话)
 * 索引为i的节点的右节点索引 right = index * 2 + 2  (如果我们数组的索引起始是0的话)
 * 父节点的索引 floor(arr.length/2)
 * 如果索引 >= floor(arr.length/2) ---> 是叶子节点
 *
 */
class Heap {
  constructor(arr) {
    this.data = [...arr];
    this.size = this.data.length;
  }

  /**
   * 所有节点都不满足堆的性质
   *       1
   *     2   3
   *   4  5
   */
  rebuildHeap() {
    // 因为Math.floor(this.size / 2)是第一个不是叶子节点的小堆的尖尖
    const L = Math.floor(this.size / 2);
    for (let i = L - 1; i >= 0; i--) {
      this.maxHeadpify(i);
    }
  }

  ifHeap() {
    const L = Math.floor(this.size / 2);

    for (let i = 0; i < L; i++) {
      const l = this.data[left(i)] || Number.MIN_SAFE_INTEGER;
      const r = this.data[right(i)] || Number.MIN_SAFE_INTEGER;
      const max = Math.max(this.data[i], l, r);

      if (max !== this.data[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * 建堆后，能能确定的就是顶上的那个是最大的，左右不确定，
   * 我们就取顶上的那个，然后把最后一个元素放顶上，
   * 由于之前是贱好堆的，符合其他地方都满足堆的性质，就直接其他地方都满足堆的性质
   */
  sort() {
    while(this.size > 0) {
      swap(this.data, 0, this.size - 1);
      this.size--;
      this.maxHeadpify(0);
    }
  }

  insert(x) {}
  /**
   *
   * 它的功能就是比较指定元素对应的小三角的三个元素，找到最大值，交换位置。
   * 再继续maxHeadpify被交换的那个索引的元素，遇到第一个不用交换的树，就停止！
   * （所以我们才说，假设其他地方都满足大根堆的性质）
   * 建堆原理也就是，从最右下角的开始maxheapify
   */
  maxHeadpify(i) {
    let max = i;

    if (i >= this.size) {
      return;
    }

    const leftIndex = left(i);
    const rightIndex = right(i);

    if (leftIndex < this.size && this.data[leftIndex] > this.data[max]) {
      max = leftIndex;
    }

    if (rightIndex < this.size && this.data[rightIndex] > this.data[max]) {
      max = rightIndex;
    }

    if (max === i) return;

    swap(this.data, i, max);

    // max的索引被置为了最大的那个值在的索引，然后与初始的位置i做了swap交换
    // 对应的就max所在的那个小的子树可能就会被造成影响。所以我们得继续heapify
    this.maxHeadpify(max);
  }
}
function left(i) {
  return i * 2 + 1;
}
function right(i) {
  return i * 2 + 2;
}
function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

//   const heap = new Heap([11, 2, 8, 12, 5, 9, 3, 4, 7, 6])
//   heap.maxHeadpify(1)
//   console.log(heap.data);

// const heap1 = new Heap([1, 2, 3, 4, 5]);
// heap1.rebuildHeap();
// console.log(heap1.data);

  const heap2 = new Heap([5, 4, 3, 2, 1]);
  heap2.rebuildHeap();
  console.log(heap2.data);
  heap2.sort();
  console.log(heap2.data);
