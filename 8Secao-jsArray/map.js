// Transfere os elementos de um array para outro array, transformando cada dado
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(elemento){
    return elemento * 2
})

console.log(resultado)

// map encadeado
const soma10 = elemento => elemento + 10
const triplo =  elemento => elemento * 3
const paraReal = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraReal)
console.log(resultado)


// Aula 2
console.log("\n\nAula 2\n")

const carrinho = [
    '{"nome": "agua", "preco": 3.40}',
    '{"nome": "carro", "preco": 5.40}',
    '{"nome": "gelo", "preco": 10.40}'
]

const precoProd = function(elemento){
    // converte de texto para obj
    let jElemento = JSON.parse(elemento) 
    let preco = jElemento.preco
    return preco
}

resultado = carrinho.map(precoProd)
console.log(resultado)

// Aula 3 - Implemetando a funcao map
console.log("\n\nAula 3\n")

Array.prototype.map2 = function(callback){
    const mapArray = []
    for(let i = 0; i < this.length; i++)
        mapArray.push(callback(this[i], i, this))
    
    return mapArray
}

resultado = carrinho.map2(precoProd)
console.log(resultado)