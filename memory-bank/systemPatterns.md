# System Patterns

## Architecture Overview
The current architecture is simple, consisting of a Python module implementing a backtracking algorithm. The system uses object-oriented principles to represent items and constants, with a functional approach to the algorithm implementation.

## Key Components
1. **Item Class**: Represents an item with price and weight attributes
2. **GameConstant Class**: Holds game-wide constants like maximum inventory size
3. **Backtracking Function**: Implements the core algorithm logic

## Design Patterns
- **Recursion**: The backtracking algorithm uses recursion to explore different combinations
- **Object-Oriented Design**: Item properties are encapsulated in classes
- **Functional Programming Elements**: The algorithm uses immutable data structures and functional approaches

## Algorithm Implementation
The backtracking algorithm works as follows:
1. Convert items to a sorted list based on efficiency (weight-to-price ratio)
2. Explore combinations recursively, considering each item for inclusion
3. Track the best combination found
4. Return the optimal solution when all possibilities are exhausted

## Data Flow
1. Input: Budget constraint and dictionary of items
2. Processing: Recursive exploration of combinations
3. Output: Optimal list of items, total price, and total weight

## Performance Considerations
- The algorithm has exponential time complexity in the worst case
- Sorting items by efficiency provides a heuristic to potentially find good solutions earlier
- Early pruning is used to avoid exploring combinations that exceed the budget

## Extensibility Points
- Additional optimization algorithms could be implemented
- More sophisticated heuristics could be added
- Parallelization could be introduced for large item sets 