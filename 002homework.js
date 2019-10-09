// arr = [1,[2],[3,[4]]]
function flatten(arr) {
  return [].concat(
    ...arr.map(item => (Array.isArray(item) ? flatten(item) : item))
  );
}

console.log(flatten([1, [2], [3, [4]]]));

// ------------------
function* test() {
  yield 1;
  yield* [1, 2, 3];
  yield 3;
  yield 4;
}

console.log(...test());



// ------------------
function flatten(arr) {
  let stack = arr.slice();
  const r = [];

  while (stack.length) {
    const x = stack.pop();

    if (x.constructor === Array) {
      stack = stack.concat(x);
    } else {
      r.unshift(x);
    }
  }

  console.log(r);
}
flatten([1, [2], 2.1, [3, [4]], 9]);
