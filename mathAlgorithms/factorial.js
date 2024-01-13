
function factorial(n) {

    if(n >= 0){
        let result = 1;
        for (i = n; i > 0; i--){
             result *= i 
            }
            return result;
    }else{
        return("n bust be an integer")
    }
}

var test = factorial(120)
console.log(test)

// time complexity, Big-O is O(n)