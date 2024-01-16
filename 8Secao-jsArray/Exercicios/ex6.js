const veri = (x) =>{
    let tipo = typeof(x)
    
    if(tipo == "number")
        return -x
    if(tipo == 'boolean')
        return !tipo
}

console.log(veri(true))