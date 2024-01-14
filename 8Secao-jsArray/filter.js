// Filtra o array
const produtos = [
    { nome : 'notebook', preco: '1333', fragil: true},
    { nome : 'ipad', preco: '633', fragil: true},
    { nome : 'copo v', preco: '33', fragil: true},
    { nome : 'copo p', preco: '33', fragil: false}
]

console.log(produtos.filter(function(produto){
// logica para retornar verdadeiro ou falso
     
}))

const fragil = (elemento) => elemento.fragil
const preco = (elemento) => elemento.preco > 500 
console.log(produtos.filter(fragil).filter(preco))

// AULA 2
console.log("\n\naula 2\n")

// implementando o filter 
Array.prototype.filter2 = function(callback){
    let newVet = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            newVet.push(this[i])
    }
    return newVet
}
console.log(produtos.filter2(fragil).filter2(preco))