// For every element present in the array, we will do a
//  linear search and count the occurrence. 
//  If for any element, the occurrence is 1,
//   we will return it.
// optimal solution
function occurOnce(arr) {
    let n = arr.length;
    let oneOccur = [];

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count === 1 && !oneOccur.includes(arr[i])) {
            oneOccur.push(arr[i]);
        }
    }

    return oneOccur;
}
console.log(occurOnce([1,2,2,3,4,4,5]));



//soln by brn 

// function occurOnce(arr){
//     let n = arr.length;
//     let oneOccur=[];
//     let count=0;
//     let found;
//     for(let i=0;i<n;i++){
//         for(let j =0;j<n;j++){
//             if(arr[i] === arr[j]){
//                 count++; 
//             }
//             if(count>1)count=0;
//         }
//         if(count===1){
//             oneOccur.push(arr[i]);
//             count=0;
//         }
//     }
//     return oneOccur;
// }
// console.log(occurOnce([1,2,2,3,4,4,5]));