// code to find if array is sorted or not.
    function isSorted(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                return false; // If any element is greater than the next, it's not sorted
            }
        }
        return true; // All elements are in non-decreasing order
    }
    console.log(isSorted([1,2,3,4]));
    console.log(isSorted([2,5,6,7,8,9]));
    console.log(isSorted([2,5,7,8,9,3,2]));
    console.log(isSorted([12,14,17,22,27,35,11]));
