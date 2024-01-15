const escola = [{
    nome: 'turma 1',
    alunos: [{
        nome: 'joa',
        nota: 9
    }, {
        nome: 'Ana',
        nota: 8
    }]
},{
    nome: 'Turma2',
    alunos: [{
        nome: 'Rebeca',
        nota: 4
    },{
        nome: 'Ali',
        nota: 3
    }]
}]

// 1) Extrair todas as notas 
const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotaTurma)
console.log(nota1)

console.log([].concat( [ 9, 8 ], [ 4, 3 ] ))

// FlatMap
Array.prototype.flatMap = function(calback){
    return Array.prototype.concat.apply([], this.map(calback))
}
const n2 = escola.flatMap(getNotaTurma)
console.log(n2)