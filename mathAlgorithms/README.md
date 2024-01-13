# Math Algorithms

This folder covers a few but common math Algos;
1. Factorial
2. Fibinacci sequence
3. Power of Two
4. Prime numbers
5. Recursive Fibonacci
6. Recursive Factorial

Factorial Algorithm
- The factorial of a non-negative integer, denoted by the symbol "!", is the product of all positive integers less than or equal to that number. For example:
    1. 5! = 5*4*3*2*1
    1. 0! = 1 by convention.

How to solve factorials
- n must be positive, if not return error of n must be      positive
- facorial of 0 is 1
- for a given number use a loop to reduce the number by 1 until 0
- factorial of each n is a multiplication of 1 n

Prime Algorith
An algorithm to detrmine if a  number is prime
- step 1 - what is a prime number - anumber that can only be divided by itself and one
- step 2 -  so if you divide said number by any number asides 1 and itslef and the remainder is 0, then it is not prime, return false else return true (isPrime)

Fibonacci Sequence
A sequence inwhich each number is the sum of the two preceeding numbers
- the firt 2 numbers in the sequence are 0,1
    1. fibonacci(2) = [0,1]
    1. fibonacci(3) = [0,1]
    2. fibonacci(7) = [0,1,1,2,3,5,8]

PowerOfTwo
An algorithm to check if a number is a power of 2
Steps to solve
1. Repeatedly divide n by 2 to get a remainder of 1
2. if the remainder isn't 1 at the least n, then not a power of 2


