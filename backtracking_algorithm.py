"""
Module implementing a backtracking algorithm to find optimal items
based on a budget constraint and maximizing total weight.
"""
from typing import Dict, List, Tuple


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
    MAX_ITEMS = 10  # Maximum number of items allowed in inventory


def _find_optimal_items_backtrack(
    budget: int,
    items: Dict[str, Item]
) -> Tuple[List[str], int, float]:
    """
    Original backtracking implementation for finding optimal items
    (Python version).

    Args:
        budget: Maximum amount to spend
        items: Dictionary of items with their properties

    Returns:
        Tuple containing:
            - List of optimal item names
            - Total price of selected items
            - Total weight of selected items
    """
    # Convert items to list and sort by weight per 1000 price (efficiency)
    items_list = [
        (name, item.price, item.total_weight)
        for name, item in items.items()
    ]

    # Handle division by zero for items with price 0
    # Sort by weight-to-price ratio (efficiency) in descending order
    items_list.sort(
        key=lambda x: (x[2] / x[1]) if x[1] != 0 else float('inf')
        if x[2] > 0 else 0,
        reverse=True
    )

    best_combination = []
    best_weight = 0.0
    best_price = 0

    current_items_stack = []  # Using a list as a stack

    def backtrack(
        start_idx: int,
        current_price: int,
        current_weight: float
    ) -> None:
        """
        Recursive backtracking function to find optimal items combination.

        Args:
            start_idx: Starting index in the sorted items list
            current_price: Current accumulated price
            current_weight: Current accumulated weight
        """
        nonlocal best_combination, best_weight, best_price

        # If current solution is better than the best known solution, update it
        if current_weight > best_weight and current_price <= budget:
            best_combination = list(current_items_stack)  # Make a copy
            best_weight = current_weight
            best_price = current_price

        # Base case: no more items to consider or inventory full
        if (start_idx >= len(items_list) or
                len(current_items_stack) >= GameConstant.MAX_ITEMS):
            return

        # Try including each remaining item
        for i in range(start_idx, len(items_list)):
            item_name, item_price, item_total_weight = items_list[i]

            # Skip if adding this item would exceed the budget
            if current_price + item_price > budget:
                continue

            # Include this item in our solution
            current_items_stack.append(item_name)

            # Recursively try to add more items
            backtrack(
                i + 1,  # Move to next item (no duplicates allowed)
                current_price + item_price,
                current_weight + item_total_weight
            )

            # Backtrack: remove the item and try another path
            current_items_stack.pop()

    # Start the backtracking process
    backtrack(0, 0, 0.0)
    return best_combination, best_price, best_weight
