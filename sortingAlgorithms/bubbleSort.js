// sort an aray in descending or ascending order
//  const arr = [-6,20,8,-2,4]
// bubbleSort(arr) should return [-6,-2, 4, 8, 20]

// steps
// 1. compare adjacent eements in the array and swap positions if they are not in the intended order
// 2.  Repeat 1 as you step through each element of the array
// 3. Once you have transversed the entire array and no more swaps, then the array is bubble sorted

function bubbleSort(arr){
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i <arr.length - 1; i++) {
            if(arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped);
}

const arr = [8, 20, -2, -4, 5, 10]
bubbleSort(arr)
console.log(arr)

// the Big-O is quadratic O(n^2)