function square(n) {
    return n * n
}

function square(n) {
    callToDb(n)
    return n * n
}

// [1, 2, 3]
function squareAll(arr) {
    return arr.map(square)
}
