function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let numToSort = arr[i]
        let j = i - 1;
        // change the > thqn sign ofr arr[j] > numToSort for a descending order
        while (j >= 0 && arr[j] < numToSort){
            arr[j+1] = arr[j]
            j = j - 1;
        }
        arr[j+1] = numToSort
    }
}

const arr = [8,20,-2,-4,-6]
insertionSort(arr)
console.log(arr)

// Big-0 = O(n^2)