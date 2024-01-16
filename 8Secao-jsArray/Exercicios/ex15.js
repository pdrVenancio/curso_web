const pares = vet =>{
    const verPar = (valor, ind) => valor % 2 == 0 && ind % 2 == 0 ? true : false
    let par = vet.filter(verPar)
    return par 
}

console.log(pares([10 , 70, 22 ,43]))