/**
 * JS-Stadium - Knapsack Algorithm Implementation
 * 
 * This is a JavaScript port of the Python knapsack algorithm,
 * optimized for client-side execution in browsers.
 */

// Game constants
const MAX_ITEMS = 6;  // Maximum number of items allowed in inventory

/**
 * Main function that runs the algorithm with predefined test cases
 */
function main() {
    // Parse items from the data structure
    const itemsList = [];
    const items = ITEMS_DATA.items;
    
    for (const [key, value] of Object.entries(items)) {
        itemsList.push([key, value.Price, value['Total Weight']]);
    }
    
    // Define test cases
    const cases = [9675, 14750, 16969, 23879, 28888, 34343, 43239, 52525, 69696, 75000, 85000, 95000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000];
    
    console.log(`${'Budget'.padEnd(10)} ${'Time (s)'.padEnd(15)} ${'Price'.padEnd(10)} ${'Weight'.padEnd(15)} ${'Items'.padEnd(10)}`);
    console.log('-'.repeat(60));
    
    // Run optimized algorithm on all test cases
    let totalTime = 0;
    for (const budget of cases) {
        const startTime = performance.now();
        const [bestItems, bestPrice, bestWeight] = knapsack(budget, itemsList);
        const endTime = performance.now();
        const executionTime = (endTime - startTime) / 1000; // Convert ms to seconds
        totalTime += executionTime;
        
        // Print results
        console.log(`${budget.toString().padEnd(10)} ${executionTime.toFixed(6)}s${' '.repeat(5)} ${bestPrice.toString().padEnd(10)} ${bestWeight.toFixed(2).toString().padEnd(15)} ${bestItems.length.toString().padEnd(10)}`);
    }
    
    console.log('-'.repeat(60));
    console.log(`${'TOTAL'.padEnd(10)} ${totalTime.toFixed(6)}s`);
    
    // Print detailed results for the last test case
    const lastCase = cases[cases.length - 1];
    const [bestItems, bestPrice, bestWeight] = knapsack(lastCase, itemsList);
    
    console.log(`\nDetailed results for budget ${lastCase}:`);
    console.log(`Best price: ${bestPrice}`);
    console.log(`Best weight: ${bestWeight.toFixed(2)}`);
    console.log(`Number of items: ${bestItems.length}`);
    console.log(`Items: ${bestItems.join(', ')}`);
}

/**
 * Optimized knapsack implementation for finding the best combination of items.
 * 
 * @param {number} budget - Maximum amount to spend
 * @param {Array} itemsList - Array of [name, price, weight] for each item
 * @returns {Array} - Array containing [bestItems, bestPrice, bestWeight]
 */
function knapsack(budget, itemsList) {
    // Quick check for edge cases
    if (!itemsList || itemsList.length === 0 || budget <= 0) {
        return [[], 0, 0.0];
    }
    
    // Pre-compute the efficiency and create a new list with efficiency included
    const processedItems = [];
    for (const [name, price, weight] of itemsList) {
        // Skip items that exceed the budget
        if (price > budget) {
            continue;
        }
        
        let efficiency;
        if (price <= 0) {
            // Handle zero or negative price
            efficiency = weight > 0 ? Infinity : 0;
        } else {
            efficiency = weight / price;
        }
        processedItems.push([name, price, weight, efficiency]);
    }
    
    // If no valid items after filtering
    if (processedItems.length === 0) {
        return [[], 0, 0.0];
    }
    
    // Sort by efficiency in descending order using the pre-computed value
    processedItems.sort((a, b) => b[3] - a[3]);
    
    /**
     * Calculate an upper bound on possible weight for pruning.
     * 
     * @param {number} idx - Starting index in the sorted items list
     * @param {number} remainingBudget - Remaining budget to spend
     * @param {number} currentWeight - Current accumulated weight
     * @returns {number} - Upper bound on achievable weight
     */
    function calculateUpperBound(idx, remainingBudget, currentWeight) {
        let upperBound = currentWeight;
        
        // Add as much as possible from remaining items fractionally
        for (let i = idx; i < processedItems.length; i++) {
            const [, price, weight] = processedItems[i];
            
            if (price <= remainingBudget) {
                upperBound += weight;
                remainingBudget -= price;
            } else {
                // Add fractional part
                upperBound += (remainingBudget / price) * weight;
                break;
            }
        }
        
        return upperBound;
    }
    
    let bestCombination = [];
    let bestWeight = 0.0;
    let bestPrice = 0;
    
    // Memoization cache to avoid recomputing states
    // Key: "startIdx,currentPrice"
    // Value: best achievable weight for this state
    const memo = new Map();
    
    const currentItemsStack = [];  // Using an array as a stack
    
    /**
     * Recursive backtracking function with memoization and pruning.
     * 
     * @param {number} startIdx - Starting index in the sorted items list
     * @param {number} currentPrice - Current accumulated price
     * @param {number} currentWeight - Current accumulated weight
     * @returns {number} - Best achievable weight for this state
     */
    function backtrack(startIdx, currentPrice, currentWeight) {
        // Check memoization cache
        const memoKey = `${startIdx},${currentPrice}`;
        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }
        
        // If current solution is better than the best known solution, update it
        if (currentWeight > bestWeight && currentPrice <= budget) {
            bestCombination = [...currentItemsStack]; // Create a copy of the current stack
            bestWeight = currentWeight;
            bestPrice = currentPrice;
        }
        
        // Base case: no more items to consider or inventory full
        if (startIdx >= processedItems.length || currentItemsStack.length >= MAX_ITEMS) {
            memo.set(memoKey, currentWeight);
            return currentWeight;
        }
        
        // Calculate upper bound to see if this branch is worth exploring
        const upperBound = calculateUpperBound(
            startIdx, budget - currentPrice, currentWeight);
        
        // Prune if this branch cannot improve the best solution
        if (upperBound <= bestWeight) {
            memo.set(memoKey, currentWeight);
            return currentWeight;
        }
        
        // Track best weight achievable from this state
        let bestAchievable = currentWeight;
        
        // Try including each remaining item
        for (let i = startIdx; i < processedItems.length; i++) {
            const [name, price, weight] = processedItems[i];
            
            // Skip if adding this item would exceed the budget
            const newPrice = currentPrice + price;
            if (newPrice > budget) {
                continue;
            }
            
            // Include this item in our solution
            currentItemsStack.push(name);
            
            // Recursively try to add more items
            const achievedWeight = backtrack(
                i + 1,  // Move to next item (no duplicates allowed)
                newPrice,
                currentWeight + weight
            );
            
            // Update best achievable weight
            bestAchievable = Math.max(bestAchievable, achievedWeight);
            
            // Backtrack: remove the item and try another path
            currentItemsStack.pop();
        }
        
        // Cache the result
        memo.set(memoKey, bestAchievable);
        return bestAchievable;
    }
    
    // Start the backtracking process
    backtrack(0, 0, 0.0);
    return [bestCombination, bestPrice, bestWeight];
}

// Run the main function when the page loads
window.addEventListener('load', main); 