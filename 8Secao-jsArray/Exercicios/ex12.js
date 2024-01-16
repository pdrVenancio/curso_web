const excAtributo = (obj, atr) => {
    console.log(obj.atr)
    delete obj[atr]

    return obj
}

console.log(excAtributo({a: 1, b: 2, c: 3}, 'b'))