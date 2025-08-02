function moveZeros(arr) {
  let result = [];

  // Push all non-zero elements
  for (let num of arr) {
    if (num !== 0) result.push(num);
  }

  // Add remaining zeros
  while (result.length < arr.length) {
    result.push(0);
  }

  return result;
}

console.log(moveZeros([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
// Output: [1, 3, 12, 0, 0]
// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
// let n = 10;
// let ans = moveZeros(n, arr);
// console.log(ans.join(' '));

