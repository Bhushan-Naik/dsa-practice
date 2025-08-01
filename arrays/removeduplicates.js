function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    // if it's the first item, or it's different from the previous one
    if (i === 0 || arr[i] !== arr[i - 1]) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

// Example usage
const arr = [2, 2, 4, 4, 4,6, 6, 10]
const result = removeDuplicates(arr);
console.log("Unique values:", result);


// function removeDuplicates(arr) {
//   let unique = [];

//   for (let i = 0; i < arr.length; i++) {
//     // if it's the first item, or it's different from the previous one
//     if (i === 0 || arr[i] > arr[i - 1]) {
//       unique.push(arr[i]);
//     }
//   }

//   return unique;
// }

// // Example usage
// const arr = [1, 1, 1, 1]
// const result = removeDuplicates(arr);
// console.log("Unique values:", result);