const alunos = [
    {nome: "Pedro", nota: 7.9},
    {nome: "Jamili", nota: 5.9},
]

// Imperativo
let tt = 0
for(let i = 0; i < alunos.length; i++)
    tt += alunos[i].nota

console.log(tt / alunos.length)

// Declarativo
const getNota = (aluno) => aluno.nota
const soma = (total, prox) => total + prox

const res = alunos.map(getNota).reduce(soma)
console.log(res/ alunos.length)