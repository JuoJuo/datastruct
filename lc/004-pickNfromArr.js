const arr = [2,5,8,1,1];

// 挑2个数，合为3，有返回，没有就回null

function sumN(arr, n, sum, i = 0, decisions = []) {

  if(sum === 0) {
    return decisions;
  }
  if(i === arr.length || n === 0 || sum < 0) {
    return null;
  }

  return sumN(arr, n - 1, sum - arr[i], i+1, decisions.concat(arr[i])) 
  || sumN(arr, n, sum, i+1, decisions);
}


const rs = sumN(arr, 3, 4);
console.log(rs);


/**
 * 上面的concat是一个O(n)的操作，我们优化一下
 */
function sumN1(A, n, m){
  let r = null;
  const decisions = [];

  function inner(i = 0, n, m) {
    if (r) return;

    if (m === 0) {
      r = decisions.slice();
      return;
    }

    if (i === A.length || n === 0 || m < 0) return;

    decisions.push(A[i]);
    inner(i + 1, n - 1, m - A[i]);
    decisions.pop();
    inner(i + 1, n, m);
  }

  inner(0, n , m);
  
  return r;
}

const arr2 = [2,5,8,1,1];
const rs2 = sumN1(arr2, 3, 4);
console.log(rs2);

