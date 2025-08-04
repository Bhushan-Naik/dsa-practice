function findMissingNumber(arr) {
  let n = arr.length + 1; // one number is missing, so total count is +1
  let expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;
  let actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5, 6])); // Output: 4


// function findMissingNumber(arr) {
//   let expected = 0, actual = 0;

//   for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//     expected += i;
//   }

//   for (let num of arr) {
//     actual += num;
//   }

//   return expected - actual;
// }
//console.log(findMissingNumber([1, 2, 3, 5, 6])); // Output: 4
