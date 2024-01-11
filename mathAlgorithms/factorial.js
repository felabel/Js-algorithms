// how a factorail works
// factorial 3 = 3 * 2* 1
// you reduce n by 1 each time using a loop as i, then multiply i by itself

function factorial(n) {
    // n must be positive, if not return error of n must be positive
    // facorial of 0 is 1
    // for a given number use a loop to reduce th enumber by 1 until 0
    // factorial of each n is a multiplication of 1

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