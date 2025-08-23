function nextPermutation(nums) {
  let n = nums.length;
  let i = n - 2;

  // Step 1: Find the pivot (first decreasing element from right)
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Step 2: Find element just larger than nums[i] to the right
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
      

      
    }
    // Swap
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 3: Reverse the subarray after i
  let left = i + 1, right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}

// Example Usage
console.log(nextPermutation([1, 3, 2])); // [2, 1, 3]
console.log(nextPermutation([3, 2, 1])); // [1, 2, 3]
