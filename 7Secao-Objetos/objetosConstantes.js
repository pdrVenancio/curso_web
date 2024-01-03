// pessoa -> 123 -> {...}
const pessoa = {nome: "caio"}
pessoa.nome = 'Pedor'
console.log(pessoa)

// pessoa -> 456 -> {...}
// nao da para estanciar um novo objeto encima de uma 
// variavel que ja possui um obj
// pessoa = { nome: "ana"}

// Congelamos o obj assim nao é possivel mais mexer nele
Object.freeze(pessoa)

pessoa.nome = "Maria"
pessoa.end = "rua duque"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// Criando o obj ja freezado
const pessoaConstante = Object.freeze({nome: "jj"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)
