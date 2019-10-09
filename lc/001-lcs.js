//  BNANA ATANA   分析，从最后一个字母A入手，如果最长子序列包含A 那么我们求lcs（bnan，atan）就行了，最后再加个A
//     ----如果不包含A，推出来与逻辑不符，因为lcs如果在lcs（bnan，atan）里是不可能得，因为最后两个A加上肯定比它长1
//     ----如果最后的A在ATAN的中间被最终匹配上，那么肯定没有
/**
 * 暴力解
 * @param {*} s 
 * @param {*} t 
 */
function lcs(s, t) {
  if (s === "" || t === "") {
    return 0;
  }

  if (s[s.length - 1] === t[t.length - 1]) {
    return lcs(s.substr(0, s.length - 1), t.substr(0, t.length - 1)) + 1;
  } else {
    return Math.max(
      lcs(s.substr(0, s.length - 1), t),
      lcs(s, t.substr(0, t.length - 1))
    );
  }
}

/**
 * 动态规划填表法
 * 各自多了一列很重要。空跟每一个字母都算一种情况
 *
 * 根据递推公式我们得到
 * @param {*} s
 * @param {*} t
 */
function lcs(s, t) {
  const dp = [];

  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];

    for (let j = 0; j <= t.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp;
}

const s = 'banana';
const t = 'atana';
const dp = lcs(s, t);

console.log(dp);

getResult(dp, s, t)

// 收集结果
// 主要注意dp的索引，跟s和t的索引有个差1的关系
function getResult(dp, s, t) {
  let x = s.length;
  let y = t.length;

  console.log(x, y)
  let result = [];

  while (x >= 0 && y >= 0) {
    if (s[x - 1] === t[y - 1]) {
      result.push(s[x - 1]);
      x -= 1;
      y -= 1;
    } else {
      if (dp[x-1][y] > dp[x][y-1]) {
        x = x-1;
      } else {
        y = y -1;
      }
    }
  }

  console.log(result);
}

/**
 * 递归解
 * @param {*} dp 
 * @param {*} s 
 * @param {*} t 
 * @param {*} x 
 * @param {*} y 
 * @param {*} result 
 */
function getReulst2(dp, s, t, x = s.length, y = t.length, result = '') {
  if (x === 0 || y === 0) return result;

  if (s[x - 1] === t[y - 1]) {
    return getReulst2(dp, s, t, x - 1, y - 1, result += s[x - 1]);
  } else {
    if (dp[x-1][y] > dp[x][y-1]) {
      return getReulst2(dp, s, t, x - 1, y, result);
    } else {
      return getReulst2(dp, s, t, x, y - 1, result);
    }
  }
}

console.log("result", getReulst2(dp, s, t));

/**
 * 非递归解
 * @param {*} dp 
 * @param {*} s 
 * @param {*} t 
 */
function getResult(dp, s, t) {
  let x = s.length;
  let y = t.length;

  console.log(x, y)
  let result = [];

  while (x >= 0 && y >= 0) {
    if (s[x - 1] === t[y - 1]) {
      result.push(s[x - 1]);
      x -= 1;
      y -= 1;
    } else {
      if (dp[x-1][y] > dp[x][y-1]) {
        x = x-1;
      } else {
        y = y -1;
      }
    }
  }

  console.log(result);
}
