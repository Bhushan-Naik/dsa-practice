let arr = [7, 10, 4, 3, 20, 15];
let k = 3;
console.log(kthSmallest(arr, k));  // 

function kthSmallest(arr, k) {
  for (let i = 0; i < k; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    // Swap arr[i] with arr[min]
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

    return arr[k - 1];

}
