// par nome/valor

const saudacao = 'opa' // contexto lexo 1

function exec(){
    const saudacao = 'falaaa' // constexto lexo 2
    return saudacao
}

// Objetos sao grupos aninhados de  pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)