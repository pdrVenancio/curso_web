// Diferença na hora de passar os parametros para uma função

// Forma 1 - Normal

function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
    
const produto = {
    nome: "notebook",
    preco : 100,
    desc: 0.1,
    getPreco
}

console.log(produto.getPreco())

// Forma 2 - Usando call/apply

// Passamos o objeto que vai ser usado na função 
// assim damos o contexto a ser usado

const carro = {
    preco : 100,
    desc : 0.2
}

// Call
console.log(getPreco.call(carro))
// .call(contexto, parametros...)
console.log(getPreco.call(carro, 0.7, "FF"))

// Apply
console.log(getPreco.apply(carro))
// .apply(constexto, [parametros..]) : Passamos os parametros em um array
console.log(getPreco.apply(carro, [0.7, "AA"]))
