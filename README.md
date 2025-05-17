# JS-Stadium

A Python implementation of a backtracking algorithm for optimizing item selection based on budget constraints and weight maximization.

## Project Overview

This project implements a solution to the knapsack problem variant, where:
- You have a budget constraint
- You need to select items to maximize total weight
- Each item has a price and weight value
- There's a maximum limit of 10 items in the inventory

## Features

- **Backtracking Algorithm**: Efficiently finds optimal combinations
- **Early Pruning**: Avoids exploring combinations that exceed budget
- **Efficiency Sorting**: Items are sorted by weight-to-price ratio to improve performance
- **Type Annotations**: Comprehensive type hints for better code understanding
- **Well Documented**: Thorough docstrings for all components

## Implementation Details

The core algorithm is implemented in Python and follows these steps:
1. Convert items to a sorted list based on efficiency (weight-to-price ratio)
2. Explore combinations recursively using backtracking
3. Track the best combination found
4. Return the optimal solution when all possibilities are explored

## Usage

```python
from backtracking_algorithm import Item, _find_optimal_items_backtrack

# Define items with price and weight
items = {
    "item1": Item(price=10, total_weight=30.0),
    "item2": Item(price=20, total_weight=70.0),
    "item3": Item(price=30, total_weight=50.0),
    "item4": Item(price=40, total_weight=60.0)
}

# Set budget constraint
budget = 50

# Find optimal items
best_items, total_price, total_weight = _find_optimal_items_backtrack(budget, items)

print(f"Best items: {best_items}")
print(f"Total price: {total_price}")
print(f"Total weight: {total_weight}")
```

## Future Enhancements

- Unit tests for algorithm verification
- Performance benchmarking capabilities
- Alternative optimization algorithms
- Multi-objective optimization support
- Visualization tools for solution analysis

## Project Structure

- `backtracking_algorithm.py`: Core implementation
- `memory-bank/`: Documentation and project context
- `.cursorrules`: Project coding standards and patterns 