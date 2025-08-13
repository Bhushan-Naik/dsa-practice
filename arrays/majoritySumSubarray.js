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



// chart to explain the kadanes algo
// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Step | Array                     | Current Element | currentSum Calculation            | currentSum | maxSum | Chosen Subarray So Far
// 1    | [-2] 1 -3 4 -1 2 1 -5 4   | -2              | Start with -2                     | -2         | -2     | [-2]
// 2    | -2 [1] -3 4 -1 2 1 -5 4   | 1               | max(1, -2+1 = -1) → choose 1      | 1          | 1      | [1]
// 3    | -2 1 [-3] 4 -1 2 1 -5 4   | -3              | max(-3, 1+(-3) = -2) → choose -2  | -2         | 1      | [1]
// 4    | -2 1 -3 [4] -1 2 1 -5 4   | 4               | max(4, -2+4 = 2) → choose 4       | 4          | 4      | [4]
// 5    | -2 1 -3 4 [-1] 2 1 -5 4   | -1              | max(-1, 4+(-1) = 3) → choose 3    | 3          | 4      | [4, -1]
// 6    | -2 1 -3 4 -1 [2] 1 -5 4   | 2               | max(2, 3+2 = 5) → choose 5        | 5          | 5      | [4, -1, 2]
// 7    | -2 1 -3 4 -1 2 [1] -5 4   | 1               | max(1, 5+1 = 6) → choose 6        | 6          | 6      | [4, -1, 2, 1]
// 8    | -2 1 -3 4 -1 2 1 [-5] 4   | -5              | max(-5, 6+(-5) = 1) → choose 1    | 1          | 6      | [4, -1, 2, 1]
// 9    | -2 1 -3 4 -1 2 1 -5 [4]   | 4               | max(4, 1+4 = 5) → choose 5        | 5          | 6      | [4, -1, 2, 1]
