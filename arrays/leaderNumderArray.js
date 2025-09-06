
// My Version of My thoughts 
function findLeaders(arr) {
    let n = arr.length;
    let leaders = [];

    for (let i = 0; i < n; i++) {
        let isLeader = true;

        // check all elements to the right of arr[i]
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                isLeader = false;
                break; // not a leader
            }
        }

        if (isLeader) {
            leaders.push(arr[i]);
        }
    }

    return leaders;
}

// Example usage
console.log(findLeaders([4, 7, 1, 0]));          // [7, 1, 0]
console.log(findLeaders([10, 22, 12, 3, 0, 6])); // [22, 12, 6]
// It’s O(n²) (nested loops), so slower for large arrays, but correct.


function printLeaders(arr) {
    let n = arr.length;
    let leaders = [];

    // Rightmost element is always a leader
    let maxFromRight = arr[n - 1];
    leaders.push(maxFromRight);

    // Traverse from second last to first
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.push(arr[i]);
            maxFromRight = arr[i];
        }
    } 

    // Leaders were collected from right to left, so reverse them
    return leaders.reverse();
}


// Example usage
console.log(printLeaders([4, 7, 1, 0]));         // [7, 1, 0]
console.log(printLeaders([10, 22, 12, 3, 0, 6])); // [22, 12, 6]
console.log(printLeaders([10, 22, 12, 3, 0, 6]));

// let maxFromRight = arr[n-1];
// for (let i = n-2; i >= 0; i--) {
//     if (arr[i] > maxFromRight) {
//         // arr[i] is leader
//     }
// }

// Single traversal of array from right to left.

// Each element is visited once.

// 👉 Time Complexity = O(n)
// 👉 Space Complexity = O(1)

