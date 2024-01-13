function towerOfHannoi(n, fromRod, toRod, usingRod) {
    if(n===1){
        console.log(`move disk 1 from  ${fromRod} to ${toRod}`)
        return;
    }
    towerOfHannoi(n-1, fromRod, usingRod, toRod)
    console.log(`move disk ${n} from  ${fromRod} to ${toRod}`)
    towerOfHannoi(n-1, usingRod, toRod, fromRod)
}

towerOfHannoi(3, 'A', 'C', 'B')

// Big-O  is  O(2^n)