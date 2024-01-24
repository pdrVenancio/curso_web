console.log(module.exports == this)
console.log(module.exports == exports)

// Exportando de diferentes maneiras
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports ={
    nome: 'Teste'
}
console.log(module.exports)

// Mesmo atribuindo diferentes valores para export 
//ele vai continuar apontando para o que foi atribuido 
//anterior mente ja que o que é passado é o module.exports

// Assim voce vai conseguir exportor o obj

module.exports ={
    publico: true,
}