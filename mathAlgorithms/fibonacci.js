function fibonacci(n) {
    const fib = [0,1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
        
    }
    console.log(fib)
    return fib
}

fibonacci(2)
fibonacci(3)
fibonacci(7)

// Time complexity ios linear O(n)