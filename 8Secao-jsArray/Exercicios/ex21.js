const menorValor = vet => vet.reduce((menor, atual) => menor >= atual ? menor = atual : menor)
const menorValor2 = vet => Math.min(...vet)

console.log(menorValor([2,1,3,4,5]))
console.log(menorValor2([2,1,3,4,5]))