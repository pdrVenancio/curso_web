// Object.preventExtension -> nao deixa criar novos atributos em um obj
const produto = Object.preventExtensions({
    nome: "dasd", preco: 34, tag: 333
})
console.log("Extencivel: ", Object.isExtensible(produto))

produto.nome = "aaaa"
produto.descricao = "aaaapaga"
delete produto.tag
console.log(produto)

// Object.seal -> nao deixa criar nem deletar atributos
const pessoa = { nome: 'Julia', idade: 33}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobreNome = "silva"
delete pessoa.idade
pessoa.nome = "Mariah"
console.log(pessoa)
 
// Object.freeze -> nao deixa criar, deletar ou modificar atributos
