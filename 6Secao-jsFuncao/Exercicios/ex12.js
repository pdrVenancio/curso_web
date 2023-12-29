function calcFat(n){
    fat = 1
    for(i = n; i > 0; i--)
        fat *= i

    return fat
}

console.log(calcFat(4))