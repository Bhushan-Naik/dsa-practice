function unionSortedArrays(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (result[result.length - 1] !== arr2[j]) result.push(arr2[j]);
      j++;
    } else {
      if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    if (result[result.length - 1] !== arr2[j]) result.push(arr2[j]);
    j++;
  }

  return result;
}
let arr1 = [1, 2, 4, 5, 6];
let arr2 = [2, 3, 5, 7];
console.log(unionSortedArrays(arr1, arr2));
// Output: [1, 2, 3, 4, 5, 6, 7]