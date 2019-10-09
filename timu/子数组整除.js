
console.log(solve([3,5,8], 13));
console.log(solve([3,9],15));
console.log(solve([7,8,2],7));
console.log(solve([1,2,3], 6));

function solve(arr, N){
  const set = new Set();
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i+1; j <= arr.length; j++) {
      const yu = arr.slice(i, j).reduce((prev, next) => prev + next, 0) % N;
      set.add(yu);
    }
  }
  return set.has(0);  
}


/**
 * 可以认为每一个数模N的余数，加起来，如果能
 *  
 */
function solve1 () {

}