// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 3   先爬1，再计算f(3-1)  --- x
//     先爬2，再计算f(3-2)  --- y
// total : x+y
// 4   先爬1，再计算f(4-1)  --- x
//     先爬2，再计算f(4-2)  --- y
// total : x+y
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(5));
// 1 2 3 5 8 13

function climbStairs2(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let x = 1,
    y = 2;

  for (let i = 2; i < n; i++) {
    [x, y] = [y, x + y];
  }

  return y;
}
console.log(climbStairs2(6));

function climbStairs3(n, x = 1, y = 2) {
  if (n === 1) return x;
  if (n === 2) return y;

  return climbStairs3(n - 1, y, x + y);
}
console.log(climbStairs3(6));
