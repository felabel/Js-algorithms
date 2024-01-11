// works only on a sorted array, if given array is not sorted, sort it first
// sort the array first
// if array is empty return -1
// find the middle element, if equal to t, return t
// if not equal to t anf is less than t, binary serach to th eleft of the array and if greater than t, binary search to the right of the array

function binarySearch(arr, t){
    // Check if the array is sorted, and if not, sort it
    let sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            sorted = false;
            break;
        }
    }

    if (!sorted) {
        arr.sort((a, b) => a - b);
        console.log('sorted arr', arr)
    }
    let leftIndex = 0;
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(t === arr[middleIndex]){
            return middleIndex
        }
        if(t < arr[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-4,1,8,2,6,10], 6))
// Big O = O(logn) - array is reduced at each stage