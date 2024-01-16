const mult = (n , x) => {
    let mult = n
    for(let i = 1; i < x; i++)
        mult += n
    return mult
}

console.log(mult(5, 5))