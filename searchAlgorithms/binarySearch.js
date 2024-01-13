
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