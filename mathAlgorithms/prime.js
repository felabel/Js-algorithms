// An algorith to detrmine if a  number is prime
// step 1 - what is a prime number - anumber that can only b edivided by itself and one
// step 2 - wirte code to check if it is prime

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