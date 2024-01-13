Cartesian Product - Givenn two finite non-empty sets, find their cartesian product
- In mathematics, a cartesian product is the an array that contains the elements in 2 sets dnoted by A*B
- Example;
- set A = [1,2] and set B = [3,4]
A*B = [[1,3], [1,4], [2,3], [2,4]]

Solution idea
- Traverse each array and pair each element in the first array with each element in the second

Climbing Staircase
Problem - Given a staircase of 'n' steps, count the number of distinct ways to climb to th etop. You can either climb 1 or 2 steps at a time

Approach
- At any given time, you can either clime 1 step or 2 steps
- If you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'
- climbingStaircase(n) = climbingStaircase(n - 1) + climbingStaircase(n-2)


Tower of Hanoi
See th eimage in the tower_of_hanoi file
The objective of the puzzle is to move the entire stack to the last rod while obeying th efollowing rules;
- Only one disk may be moved at a time
- Each move consists of taking the upper disk from one of the stacks and placing it ontoop of another stack or an empty stack
- No disk may be placed on top of a disk that is smaller
