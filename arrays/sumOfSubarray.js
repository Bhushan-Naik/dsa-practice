function longestSubarraySumK(arr, k) {
  let maxLen = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += arr[j];

      if (sum === k) {
        let length = j - i + 1;
        if (length > maxLen) {
          maxLen = length;
        }
      }
    }
  }

  return maxLen;
}
// console.log(longestSubarraySumK([2,3,5,1,9],10));
console.log(longestSubarraySumK([2,3,5,1,3,2,3,1,1,9],10));