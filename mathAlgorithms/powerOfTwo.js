function isPowerOfTwo(n){
    if (n < 1) return false

    while (n>1){
        if(n % 2 !== 0) {
            return false;
        }
        n = n/2
    }
    return true
}

// method 2 using the bitwise operator to check if there is pnly 1 bit in the binary representation of n;
function isPower(n){
    if(n < 0) return false
    return (n & (n - 1)) == 0
}

// console.log(isPowerOfTwo(8));time complexity is Object(logn) because we are reducing the value of n by half each time