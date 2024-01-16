const addArray = (obj, x) =>{
    let vet = []
    for(let i = 0; i < x; i++)
        vet.push(obj)

    return vet
}

console.log(addArray("carro", 5))