# System Patterns

## Architecture Overview
The architecture consists of a Python module implementing a knapsack algorithm for game item optimization. The system has two main components:
1. A data processing layer that loads and parses JSON data 
2. An algorithm layer that optimizes item selection based on budget constraints

## Key Components
1. **Item Class**: Represents an item with price and weight attributes
2. **GameConstant Class**: Holds game-wide constants like maximum inventory size
3. **Knapsack Function**: Implements the core optimization algorithm using backtracking
4. **Main Function**: Entry point that loads data, runs test cases, and measures performance
5. **JSON Data Store**: Contains all item definitions with their attributes

## Design Patterns
- **Recursion**: The backtracking algorithm uses recursion to explore different combinations
- **Object-Oriented Design**: Item properties are encapsulated in classes
- **Command Pattern**: The main function runs multiple test cases with different budget constraints
- **Data-Driven Design**: Item properties are loaded from an external JSON file rather than hardcoded

## Algorithm Implementation
The knapsack algorithm works as follows:
1. Load items from JSON file and prepare them for processing
2. Sort items by efficiency (weight-to-price ratio) in descending order
3. Explore combinations recursively, considering each item for inclusion
4. Track the best combination found based on total weight
5. Return the optimal solution when all possibilities are exhausted
6. Measure and report execution time for performance analysis

## Data Flow
1. Input: JSON file with item data and budget constraints
2. Processing: 
   - Parse JSON data into item list
   - Run optimization algorithm for each test budget
   - Track timing information
3. Output: 
   - Optimal price for each budget scenario
   - Performance metrics (execution time)

## Performance Considerations
- The algorithm has exponential time complexity in the worst case
- Sorting items by efficiency provides a heuristic to potentially find good solutions earlier
- Early pruning is used to avoid exploring combinations that exceed the budget
- Performance measurements are included to track algorithm efficiency

## Extensibility Points
- Additional optimization algorithms could be implemented
- The JSON data structure allows for easy addition of new items or attributes
- Test cases can be modified to explore different budget scenarios
- The output format could be enhanced to provide more detailed information 