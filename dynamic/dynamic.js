// 重复子问题   求最优xxx

// 最长子序列问题   ABC  按照顺序可以删除中间的0个一个或者多个   ------------应用  dna双螺旋结构  多段的公共子序列

// 暴力求出两个字符串的子集，然后求交集，时间复杂度太高

//  BNANA ATANA   分析，从最后一个字母A入手，如果最长子序列包含A 那么我们求lcs（bnan，atan）就行了，最后再加个A
//     ----如果不包含A，推出来与逻辑不符，因为lcs如果在lcs（bnan，atan）里是不可能得，因为最后两个A加上肯定比它长1
//     ----如果最后的A在ATAN的中间被最终匹配上，那么肯定没有

//  BANA AT   max （lcs(ban, at) lcs（bnana, a））

// function lcs(s, t) {
//   if (s === "" || t === "") {
//     return 0;
//   }

//   if (s[s.length - 1] === t[t.length - 1]) {
//     return lcs(s.substr(0, s.length - 1), t.substr(0, t.length - 1)) + 1;
//   } else {
//     return Math.max(
//       lcs(s.substr(0, s.length - 1), t),
//       lcs(s, t.substr(0, t.length - 1))
//     );
//   }
// }

// console.log(lcs("banana", "atana"));
// console.log(lcs("1234567", "134587"));

function lcs2(s, t) {
  const dp = [];

  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];

    for (let j = 0; j <= t.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (s[i-1] === t[j-1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp;
  // return dp[s.length][t.length];
}

console.log(lcs2("banana", "atana"));

// function getResult(dp, s, t) {
//   const result = [];
//   let x = s.length, y = t.length;


//   while(dp[x][y] > 0) {
//     result.push(s[x-1]);
//     x-=1;
//     y-=1;
//   }




// }