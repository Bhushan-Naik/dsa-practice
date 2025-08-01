function leftrotateArray(arr) {
  let temp = [];

  for (let i = 1; i < arr.length; i++) {
    temp.push(arr[i]); // shift left
  }

  temp.push(arr[0]); // put first element at end

  return temp;
}
console.log(leftrotateArray([1,2,3,4,5,6,7]));

//right rotate array....
function rightRotateByOne(arr) {
  if (arr.length === 0) return [];

  let temp = [];

  // Add last element first
  temp.push(arr[arr.length - 1]);

  // Add the rest
  for (let i = 0; i < arr.length - 1; i++) {
    temp.push(arr[i]);
  }

  return temp;
}

// Example usage
const input = [1, 2, 3, 4, 5];
const result = rightRotateByOne(input);
console.log(result); 

// function rotateArray(arr){
//     for(let i = 1 ; i<arr.length;i++){
//         if(i!== arr.length-1){
//             temp[i-1]=arr[i];
//         }
//         else{
//             temp.push(arr[i]);
//         }
//     }
//     return temp; 
// }
// let temp=[];
// console.log(rotateArray([1,2,3,4,5,6,7]));