/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let i = 0;
  let count = 0;

  while(i < nums.length) {
    let maxLength = -1;

    for(let j = 0; j <= nums[i]; j++) {
      maxLength = Math.max(i + j + nums[i + j], maxLength);
    }

    i = maxLength;
    count++
  }

  return count;
};


jump([2,3,1,1,4])

