function sqrOf(n) {
    if (n === 0 || n === 1) return n;
    
    var index = 1, square = 1
    while(square < n){
        if (square == n){
            return square;
        }

        index++;
        square = index * index
    }
    return index
}

console.log(sqrOf(9))