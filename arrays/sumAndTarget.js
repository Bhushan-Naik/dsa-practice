function twoSumExists(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return "YES";
      }
    }
  }
  return "NO";
}

// Example:
console.log(twoSumExists([2, 7, 11, 15], 9)); // YES
console.log(twoSumExists([1, 2, 3], 10));     // NO


function twoSumIndices(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// Example:
console.log(twoSumIndices([11, 15, 2, 7], 9)); // [0, 1]
console.log(twoSumIndices([1, 2, 3], 10));     // [-1, -1]