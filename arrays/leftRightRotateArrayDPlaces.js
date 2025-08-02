function leftRotateByK(arr, k) {
  if (arr.length === 0) return [];

  k = k % arr.length; // to avoid overflow
  let rotated = [];

  for (let i = k; i < arr.length; i++) {
    rotated.push(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    rotated.push(arr[i]);
  }

  return rotated;
}
console.log(leftRotateByK(([1,2,3,4,5,6]),2));


// right rotale by n places
function rightRotateByK(arr, k) {
  if (arr.length === 0) return [];

  let n = arr.length;
  k = k % n; // handles cases when k > n

  // Get last k elements, then the rest
  let rotated = [];

  for (let i = n - k; i < n; i++) {
    rotated.push(arr[i]);
  }

  for (let i = 0; i < n - k; i++) {
    rotated.push(arr[i]);
  }

  return rotated;
}
console.log(rightRotateByK(([1,2,3,4,5,6,7,8,9,10]),2));

//wrong guesssed code by brn
// function leftRotateByK(arr,k){
//     if(arr.length === 0) return [];
//     let temp=[];
//     for (let i = 1;i<k;i++){
        
//         for(let j=0;j<arr.length;j++){
//             temp[j]=arr[j+1];
//         }
//         temp.push(arr[0]);
//     }
//     return temp;
// }
//
//console.log(leftRotateByK(([1,2,3,4,5,6]),2));