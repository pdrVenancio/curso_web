// O resultado da primeira interação é passado para a inteção seguinte
// Basicamente é um contador/ somatorio/ produtorio

const alunos = [
    {nome: "Pedro", nota: 5, bolsista: false},
    {nome: "Jao", nota: 7, bolsista: false},
    {nome: "Maria", nota: 10, bolsista: false},
    {nome: "Pedro", nota: 5, bolsista: false}
]

// extraindo a nota
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(`acumulador: ${acumulador}, atual: ${atual}`)
    return acumulador + atual
}, 10) // valor inicial do acumulador

console.log(resultado)

// AULA 2
console.log("\n\naula 2\n")

// 2) Todos alunos bolsistas?
//const verTodosBolsistas = (acumulador, atual) => !acumulador ? acumulador = false : acumulador = atual 
const verTodosBolsistas = (acumulador, atual) => acumulador && atual
const resultado2 = alunos.map(a => a.bolsista).reduce(verTodosBolsistas, true)
console.log(resultado2, "\n\n")

// 1) Algum aluno bolsista?
//const verAlgumBolsistas = (acumulador, atual) => acumulador ? acumulador = true : acumulador = atual
const verAlgumBolsistas = (acumulador, atual) => acumulador || atual
const resultado3 = alunos.map(a => a.bolsista).reduce(verAlgumBolsistas, false)
console.log(resultado3)

// AULA 3
console.log("\n\naula 3\n")

Array.prototype.reduce2 = function(callback, inicial){
    let indceInicial = inicial ? 0 : 1
    let acumulador = inicial !== undefined ? inicial : this[0]

    for( let i = indceInicial; i < this.length; i++)
        acumulador = callback(acumulador, this[i], i, this)

    return acumulador
}

const soma = (tt, valor) => tt + valor
const nums = [ 1, 5, 2, 3, 8]
console.log(nums.reduce2(soma, 20))