// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

// 给定 nums = [1,1,1,2,2,3],函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 

// js里负数索引返回的是undefined
const removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
};

removeDuplicates([1,1,1,2,2,3]);


// 优化版
const removeDuplicates = function(nums) {
  let length = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[length - 2]) {
      nums[length++] = nums[i];
    }
  }

  console.log(length, nums);
};

removeDuplicates([0,0,1,1,1,1,2,3,3]);