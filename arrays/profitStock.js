 // Code to get max profit in Array
 
function maxProfit(prices) {
    let minPrice = Infinity;  // smallest price seen so far
    let maxProfit = 0;        // largest profit so far

    for (let price of prices) {
        // Update the minimum price seen so far
        if (price < minPrice) {
            minPrice = price;
        }
        // Calculate profit if selling today
        let profit = price - minPrice;

        // Update maxProfit if today's profit is bigger
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

// Example:
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // 0\


// Explaination of code by example  
// Day | Price | Min Price so far | Profit if Sell Today | Max Profit so far
// 0   | 7     | 7                | 0                    | 0
// 1   | 1     | 1                | 0                    | 0
// 2   | 5     | 1                | 4                    | 4
// 3   | 3     | 1                | 2                    | 4
// 4   | 6     | 1                | 5                    | 5
// 5   | 4     | 1                | 3                    | 5
