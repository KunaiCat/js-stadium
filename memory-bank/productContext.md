# Product Context

## Problem Domain
The js-stadium project addresses the optimization problem of selecting a set of items from a game to maximize utility (total weight) within a budget constraint. This is a variant of the knapsack problem, which has applications in inventory management and loadout optimization for gaming. The project specifically appears to optimize item selections for a hero-based game, possibly similar to Overwatch, based on the item attributes in the items.json file.

## Use Cases
1. **Game Loadout Optimization**: Helping players determine the optimal combination of items to purchase within their budget
2. **Inventory Management**: Selecting items to include in a player's inventory with budget constraints
3. **Item Balance Analysis**: Providing data for game developers to assess item balance and value
4. **Speed-running Optimization**: Finding the most efficient item combinations for completing game objectives quickly

## User Experience Goals
1. Provide accurate and optimal solutions to help players make informed decisions
2. Enable quick calculation of optimal loadouts for different budget scenarios
3. Support analysis of large item datasets to identify valuable item combinations
4. Measure algorithm performance to ensure viable use in real-time gaming situations

## Value Proposition
This implementation offers a solution to the complex decision problem of item selection faced by players. It helps identify non-obvious optimal combinations that might be missed through manual analysis, especially considering the large number of items (70+ in the current dataset) and their various attributes.

## Intended Audience
- Game players seeking optimized loadouts
- Game developers analyzing item balance
- Data analysts examining game economics
- Algorithm designers interested in knapsack problem variations

## Success Metrics
1. Algorithm correctness (finding truly optimal solutions)
2. Performance efficiency (solving the problem in reasonable time for game usage)
3. Adaptability to different budget constraints and item pools
4. Ease of integration with game data structures 