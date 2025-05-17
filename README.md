# JS-Stadium

A Python implementation of a knapsack algorithm for optimizing item selection in games based on budget constraints and weight maximization.

## Project Overview

This project implements a solution to the knapsack problem variant, where:
- You have a budget constraint
- You need to select items to maximize total weight
- Each item has a price and weight value
- There's a maximum limit of 10 items in the inventory

The system is designed to process game item data from a JSON file and find the optimal combinations of items for different budget scenarios.

## Features

- **Knapsack Algorithm**: Efficiently finds optimal combinations using backtracking
- **JSON Data Processing**: Loads item data from structured JSON files
- **Multiple Test Cases**: Runs optimization for various budget scenarios
- **Performance Measurement**: Tracks execution time for algorithm evaluation
- **Early Pruning**: Avoids exploring combinations that exceed budget
- **Efficiency Sorting**: Items are sorted by weight-to-price ratio to improve performance
- **Type Annotations**: Comprehensive type hints for better code understanding
- **Well Documented**: Thorough docstrings for all components

## Implementation Details

The core algorithm implementation follows these steps:
1. Load item data from a JSON file
2. Parse the data into a format suitable for processing
3. For each test budget:
   - Sort items by efficiency (weight-to-price ratio)
   - Use backtracking to explore combinations
   - Find the combination that maximizes weight within budget
   - Measure and report performance

## Example Usage

The main function in `backtracking_algorithm.py` demonstrates how to use the algorithm:

```python
def main():
    # Load items from JSON file
    with open('items.json', 'r') as f:
        items = json.load(f)
    items = items['items']
    items_list = []
    for key in items.keys():
        items_list.append((key, items[key]['Price'], items[key]['Total Weight']))
    
    # Run test cases with different budgets
    cases = [9675, 13750, 18888, 27840]
    for case in cases:
        start_time = time.time()
        out = knapsack(case, items_list)[1]
        end_time = time.time()
        print(out)
        print(f"Time taken: {end_time - start_time} seconds\nBudget: {case}")
```

## Data Format

The algorithm expects item data in the following JSON format:

```json
{
  "items": {
    "Item Name": {
      "Price": 1000,
      "Total Weight": 14.14,
      "Other attributes": "values"
    },
    ...
  }
}
```

## Future Enhancements

- Improved output format showing all selected items
- Error handling for file loading and data processing
- Visualization of selected items and their attributes
- User interface for running optimizations
- Alternative algorithms for comparison
- Multi-objective optimization support
- Performance optimizations with result caching

## Project Structure

- `backtracking_algorithm.py`: Core implementation with knapsack algorithm and main function
- `items.json`: Data file containing all item definitions with their attributes
- `memory-bank/`: Documentation and project context
- `.cursorrules`: Project coding standards and patterns 