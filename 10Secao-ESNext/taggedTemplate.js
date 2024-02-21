// tagged template - processa o template dentro de uma funcao

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'pedro'
const situacao = 'aprovado'
console.log(tag `${aluno} esta ${situacao}`)

// Exemplo 
function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        // add a parte e o valor em seguida
        resultado.push(partes[indice], valor)
    })
    console.log(resultado)
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de  ${precoParcela}`)