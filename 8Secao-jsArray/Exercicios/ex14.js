const objArray = obj => {
    let vet = []
    // acessamos cada chave/artributo do obj 
    Object.keys(obj).forEach(atr =>{
        // atr = chave - obj[atr] = valor contido na chave
        vet.push([atr, obj[atr]])
    }) 
    return vet
}

console.log(objArray({a:1, b:2, c:3}))