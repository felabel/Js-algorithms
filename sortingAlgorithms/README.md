# sorting algorithm

This study covers
1. bubble sort
2. Insertion sort
3. Quick sort
4. Merge sort

Bubble Sort
- This sorts an array in an ascending or descending order
- It compares the first element by the next and swaps it where necessary
- Then goes through the array to keep swapping until the order is achieved.


Insertion sort - How it works;
- Virtually split the array into a sorted and unsorted part
- Assume that the first element is already sorted and others aren't
- Select an unsorted element and compare with all the elemnts in the sorted part
- if the elements in the sorted part is smaller than the selected element, proceed to the next element else shift larger elements in the sorted part towards the right.
- Insert the selected element at the right index
- Repeat unti; all the unsorted elements are placed in the right order.

Quick Sort
- Identify the pivot element, how?
    - Pick the first element or
    - Pick the last element as pivot or (our approch)
    - Pick a random element or
    - Pick median as pivot
- Put elements smaller than the pivot into a left away and elements greater into a right array
- Repeat the process for the individual left and right arrays till you have an array of length 1 ahich is sorted by definition
- Repeatedly concatenate the left array, pivot and right array till one sorted array remains