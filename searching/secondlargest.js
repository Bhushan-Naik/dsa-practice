// Given an array of integers nums, return the second-largest 
// element in the array. 
// If the second-largest element does not exist, return -1.
function secondLargest(nums) {
  if (nums.length < 2) return -1;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of nums) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? -1 : second;
}

console.log(secondLargest([5, 2, 1, 9, 7]));  
console.log(secondLargest([9, 9, 9]));    
console.log(secondLargest([5]));              
console.log(secondLargest([5, 5, 6]));  