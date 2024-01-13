// given an array of n elements and a target t, find the index of t in the array. Return -1 if the target element is not found

function searchAlgo(array, t){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === t){
            return i;
        }
    }
    return -1        
}

console.log(searchAlgo([2,4,6,1,3], 9))