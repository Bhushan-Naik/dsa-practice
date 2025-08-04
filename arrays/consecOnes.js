function consecOne(arr, n) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            count++;
            if (count > maxCount) {
                maxCount = count;
            }
        } else {
            count = 0;
        }
    }

    return maxCount;
}
console.log(consecOne([1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1],1));
//brn version \
// function consecOne(arr,n){
//     let count=1;
//     let maxCount=0;
//     for(let i=0;i<arr.length-1;i++){
//     if (arr[i] === n && arr[i + 1] === n){
//             count++;
           
//         }
//         else{
//             if(count > maxCount){
//                  maxCount = count + 1;
//             }
//             count = 0;
//         }
//     }
//     return maxCount;

// }
//console.log(consecOne([1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1],1));