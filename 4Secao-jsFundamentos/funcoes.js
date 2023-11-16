// função sem retorno
function imprimeSoma(a , b){
    console.log(a + b)
}
imprimeSoma(2, 3)

function soma(a = "Informe o parametro", b = ""){ // se nao for passado nenum valor a e b recebem eles possuem um valor padrao
    return a + b
}
console.log(soma(3, 5))
console.log(soma())


// funcao arrow
const soma2 = (a, b) =>{
    return a + b
}

//retorno implicito

const subtracao = (a, b) => console.log(a - b) // retorna a - b // usado  quando a função tem apenas uma linha de codigo
subtracao(5,7)