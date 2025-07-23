let arr=[10,30,50,60,80];
let n = arr.length;

function linearSearch(arr,n,x){
    let i;
    for(i=0;i<n;i++)
        if (arr[i] == x)
        return i;
    return -1;
}

let x1 = 50;
console.log(linearSearch(arr, n, x1));

let x2 = 5;
console.log(linearSearch(arr, n, x2));