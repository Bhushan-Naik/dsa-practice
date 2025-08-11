function majorityElement(nums) {
    let candidate = nums[0], count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate; // Guaranteed to exist
}

// Example
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2