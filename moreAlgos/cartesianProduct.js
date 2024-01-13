function cartesianproduct(arr1, arr2){
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])            
        }        
    }
    return result;
}

const arr1 = [1,3]
const arr2 = [2,3,4]
console.log(cartesianproduct(arr1, arr2))