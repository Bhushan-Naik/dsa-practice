function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Optimization: Stop if no swap happened
  }
  return arr;
}

// Example:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", bubbleSort(arr));

// Nice nice understood
// Above is the Optimised solution to decrease the time complexity 
// below is the wirth unOptimised solution OG solution 

// Bubble sort Implementation using Javascript

// Creating the bblSort function
// function bblSort(arr) {

//     for (var i = 0; i < arr.length; i++) {

//         // Last i elements are already in place  
//         for (var j = 0; j < (arr.length - i - 1); j++) {

//             // Checking if the item at present iteration 
//             // is greater than the next iteration
//            if (arr[j] > arr[j + 1]) {

//                 // If the condition is true
//                 // then swap them
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }

//     // Print the sorted array
//     console.log(arr);
// }

// // This is our unsorted array
// var arr = [234, 43, 55, 63, 5, 6, 235, 547];

// // Now pass this array to the bblSort() function
// bblSort(arr); 