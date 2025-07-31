
function largestElement(nums) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
    
}
console.log(largestElement([2,5,7,9,22]));