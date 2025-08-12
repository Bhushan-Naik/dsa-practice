function maxSubArray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        // If current element is better than adding it to currentSum
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        // Update maxSum if needed
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    console.log("Maximum Sum:", maxSum);
    console.log("Subarray:", arr.slice(start, end + 1));
    return maxSum;
}

// Example
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
// Output:
// Maximum Sum: 6
// Subarray: [4, -1, 2, 1]
