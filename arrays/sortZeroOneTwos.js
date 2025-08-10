
// // BRN Code
// function sortZeroOneTwos(arr){
//     let temp=[]
//     for(let i = 0; i< arr.length-1; i++){
//         for(let j = 0; j< arr.length; j++){
//             if( i === arr[j])
//             {
//                temp.push(arr[j]); 
//             }
//         }
//     }
//     return temp;
// }
// console.log(sortZeroOneTwos([0,1,2,1,0,2,0,0,0,1,1,1,2]));



// Actual solutionn

function sortZeroOneTwos(arr) {
  let low = 0, mid = 0, high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid]
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    }
    else if (arr[mid] === 1) {
      mid++;
    }
    else { // arr[mid] === 2
      // Swap arr[mid] and arr[high]
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  } 
  return arr;
}

// Example:
console.log(sortZeroOneTwos([0,1,2,1,0,2,0,0,0,1,1,1,2]));
