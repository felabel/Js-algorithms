function findTwoSum(array, sum) {
    for(var i = 0, arrayLength = array.length; i <arrayLength; i++){
        for (var j = i+1; j<arrayLength; j++){
            if(array[j] + array[i] == sum){
                console.log(array[i] , array[j])
                return true;
            } 
        }
    }

}
var result = findTwoSum([4,8,7,3,99], 10)
console.log(result)