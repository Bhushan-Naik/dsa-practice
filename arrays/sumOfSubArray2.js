function longestSubarraySumK(arr, k) {
  let maxLen = 0; // to store the longest length found

  for (let i = 0; i < arr.length; i++) {
    let sum = 0; // reset sum for each new start index

    for (let j = i; j < arr.length; j++) {
      sum += arr[j]; // add current element

      if (sum === k) {
        let length = j - i + 1; // calculate length of subarray
        if (length > maxLen) {
          maxLen = length; // update if longer subarray found
        }
      }
    }
  }

  return maxLen;
}

// Example usage:
console.log(longestSubarraySumK([2, 3, 5], 5));        // Output: 2
console.log(longestSubarraySumK([-1, 1, 1], 1));       // Output: 3
