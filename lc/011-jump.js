/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let maxReach = 0;
  let step = 0;
  let end = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    //因为maxReach一直记录着最大值，所以maxReach能覆盖其他比它短的所有位置，题目假设了所有的输入都能走到最后一个位置（即都有解）

    maxReach = Math.max(nums[i] + i, maxReach);

    //eg: 2能走到3，1，我们就把这个区间最大的maxReach找出来，然后在检查完后，替换end，以此类推
    if (i === end) {
      step++;
      end = maxReach;
    }
  }

  return step;
};

//max     2 4 3 4 8
//index   0 1 2 3 4
    jump([2,3,1,1,4]);
// jump([1,2]);

