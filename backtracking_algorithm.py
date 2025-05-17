import json
import time

def main():
    with open('items.json', 'r') as f:
        items = json.load(f)
    items = items['items']
    items_list = []
    for key in items.keys():
        items_list.append((key, items[key]['Price'], items[key]['Total Weight']))
    
    # Define test cases
    cases = [9675, 14750, 16969, 23879, 28888, 34343, 43239, 52525, 69696, 75000, 85000, 95000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000]
    
    print(f"{'Budget':<10} {'Time (s)':<15} {'Price':<10} {'Weight':<15} {'Items':<10}")
    print("-" * 60)
    
    # Run optimized algorithm on all test cases
    total_time = 0
    for case in cases:
        start_time = time.time()
        best_items, best_price, best_weight = knapsack(case, items_list)
        end_time = time.time()
        execution_time = end_time - start_time
        total_time += execution_time
        
        # Print results
        print(f"{case:<10} {execution_time:.6f}s{' '*5} {best_price:<10} {best_weight:<15.2f} {best_items}")
    
    print("-" * 60)
    print(f"{'TOTAL':<10} {total_time:.6f}s")
    
    # Print detailed results for the last test case
    print(f"\nDetailed results for budget {cases[-1]}:")
    print(f"Best price: {best_price}")
    print(f"Best weight: {best_weight}")
    print(f"Number of items: {len(best_items)}")
    print(f"Items: {', '.join(best_items)}")


class Item:
    """
    Represents an item that can be purchased.
    
    Attributes:
        price: The cost of the item
        total_weight: The weight value of the item
    """
    def __init__(self, price: int, total_weight: float):
        self.price = price
        self.total_weight = total_weight


class GameConstant:
    """
    Constants used throughout the game.
    
    Attributes:
        MAX_ITEMS: Maximum number of items allowed in inventory
    """
    MAX_ITEMS = 6  # Maximum number of items allowed in inventory


def knapsack(budget, items_list):
    """
    Optimized backtracking implementation for finding the best combination of items.

    Args:
        budget: Maximum amount to spend
        items_list: List of tuples (name, price, weight) for each item

    Returns:
        Tuple containing:
            - List of optimal item names
            - Total price of selected items
            - Total weight of selected items
    """
    # Quick check for edge cases
    if not items_list or budget <= 0:
        return [], 0, 0.0
        
    # Pre-compute the efficiency and create a new list with efficiency included
    processed_items = []
    for name, price, weight in items_list:
        # Skip items that exceed the budget
        if price > budget:
            continue
            
        if price <= 0:
            # Handle zero or negative price
            efficiency = float('inf') if weight > 0 else 0
        else:
            efficiency = weight / price
        processed_items.append((name, price, weight, efficiency))
    
    # If no valid items after filtering
    if not processed_items:
        return [], 0, 0.0
    
    # Sort by efficiency in descending order using the pre-computed value
    processed_items.sort(key=lambda x: x[3], reverse=True)
    
    # Upper bound calculation - used for branch and bound optimization
    def calculate_upper_bound(idx, remaining_budget, current_weight):
        """Calculate an upper bound on possible weight for pruning."""
        upper_bound = current_weight
        
        # Add as much as possible from remaining items fractionally
        for i in range(idx, len(processed_items)):
            _, price, weight, _ = processed_items[i]
            
            if price <= remaining_budget:
                upper_bound += weight
                remaining_budget -= price
            else:
                # Add fractional part
                upper_bound += (remaining_budget / price) * weight
                break
                
        return upper_bound
    
    best_combination = []
    best_weight = 0.0
    best_price = 0
    
    # Memoization cache to avoid recomputing states
    # Key: (start_idx, current_price)
    # Value: best achievable weight for this state
    memo = {}
    
    current_items_stack = []  # Using a list as a stack
    
    def backtrack(
        start_idx: int,
        current_price: int,
        current_weight: float
    ) -> float:
        """
        Recursive backtracking function with memoization and pruning.

        Args:
            start_idx: Starting index in the sorted items list
            current_price: Current accumulated price
            current_weight: Current accumulated weight
            
        Returns:
            Best achievable weight for this state
        """
        nonlocal best_combination, best_weight, best_price
        
        # Check memoization cache
        memo_key = (start_idx, current_price)
        if memo_key in memo:
            return memo[memo_key]
        
        # If current solution is better than the best known solution, update it
        if current_weight > best_weight and current_price <= budget:
            best_combination = current_items_stack.copy()
            best_weight = current_weight
            best_price = current_price
        
        # Base case: no more items to consider or inventory full
        if (start_idx >= len(processed_items) or
                len(current_items_stack) >= GameConstant.MAX_ITEMS):
            memo[memo_key] = current_weight
            return current_weight
        
        # Calculate upper bound to see if this branch is worth exploring
        upper_bound = calculate_upper_bound(
            start_idx, budget - current_price, current_weight)
        
        # Prune if this branch cannot improve the best solution
        if upper_bound <= best_weight:
            memo[memo_key] = current_weight
            return current_weight
        
        # Track best weight achievable from this state
        best_achievable = current_weight
        
        # Try including each remaining item
        for i in range(start_idx, len(processed_items)):
            name, price, weight, _ = processed_items[i]
            
            # Skip if adding this item would exceed the budget
            new_price = current_price + price
            if new_price > budget:
                continue
            
            # Include this item in our solution
            current_items_stack.append(name)
            
            # Recursively try to add more items
            achieved_weight = backtrack(
                i + 1,  # Move to next item (no duplicates allowed)
                new_price,
                current_weight + weight
            )
            
            # Update best achievable weight
            best_achievable = max(best_achievable, achieved_weight)
            
            # Backtrack: remove the item and try another path
            current_items_stack.pop()
        
        # Cache the result
        memo[memo_key] = best_achievable
        return best_achievable

    # Start the backtracking process
    backtrack(0, 0, 0.0)
    return best_combination, best_price, best_weight


if __name__ == "__main__":
    main()
