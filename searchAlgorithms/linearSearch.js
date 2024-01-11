// given an array of n elements and a target t, find the index of t in the array. Return -1 if the target element is not found
// pseudo code
// go through each element using a for loop
// if at some point the index is equal to teh target return the index
// else return -1 if the target is not in the array
function searchAlgo(array, t){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === t){
            return i;
        }
    }
    return -1        
}

console.log(searchAlgo([2,4,6,1,3], 9))