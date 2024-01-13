
function isNumPrime(n){
    if(n < 2) return false

    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false;
        }
        else {
            return true;
        }
    }
}

console.log(isNumPrime(4))
console.log(isNumPrime(7))
console.log(isNumPrime(5))

// time complexity Object(sqrt(n))