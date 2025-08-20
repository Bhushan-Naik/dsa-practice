function rearrangeAlternating(arr) {
  let positives = [];
  let negatives = [];

  // Step 1: Separate positives and negatives
  for (let num of arr) {
    if (num >= 0) positives.push(num);
    else negatives.push(num);
  }

  let result = [];
  let i = 0, j = 0;

  // Step 2: Merge alternately (starting with positive)
  while (i < positives.length && j < negatives.length) {
    result.push(positives[i++]); // add positive
    result.push(negatives[j++]); // add negative
  }

  return result;
}

// Example usage:
console.log(rearrangeAlternating([1, 2, -3, -4, -5, 6]));  
// Output: [1, -3, 2, -4, 6, -5]

console.log(rearrangeAlternating([-1, 2, 3, -4, -5, 6]));
// Output: [2, -1, 3, -4, 6, -5]
