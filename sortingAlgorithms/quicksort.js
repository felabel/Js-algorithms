function quickSort(arr) {
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length-1; i++){
        // change this to < to sort in ascending order
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [8,20,-2,-4,-6]
console.log(quickSort(arr))
// worst case -O(n^2) - for an already sorted array
// avg case - O(nlogn)