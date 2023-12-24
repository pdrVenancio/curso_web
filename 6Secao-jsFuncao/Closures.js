// É o escopo criado quando uma fução é declarada
// Esse escopo permite a função acessar a manipular variaveis externas à função

const x = "global"

function fora(){
    const x = "local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())