# Search algorithms

This study cover;
1. Binary search
2. Linear search

Linear Search
Problem: Given an array of n elements and a target t, find the index of t in the array. Return -1 if the target element is not found. 
Examples;
arr = [-5, 2, 10, 4, 6], t = 10 => should return 2
arr = [-5, 2, 8, 12, 6], t = 20 => should return -1
Steps to solve
- Go through each element using a for loop
- if at some point the index is equal to teh target return the index
- else return -1 if the target is not in the array

Binary Search
works only on a sorted array, if given array is not sorted, sort it first
- If array is empty return -1
- Find the middle element, if equal to t, return t
- if not equal to t and is less than t, binary search to theleft of the array and if greater than t, binary search to the right of the array

