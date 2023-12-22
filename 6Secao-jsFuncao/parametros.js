// Podemos passar mais parametros q o necessario
// que a função ignora os parametros adicionais

// Sem receber argumentos 
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i] // arguments vai ser tos os argumentos passados 
    }
    return soma
}

console.log(soma(1,2,3,4,5,6))

// Parametro padrao
console.log('\nValor padrao\n')

// Da BO quando passamos 0 reconhece como falso e assume o valor 1 
function soma4(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

function soma2(a ,b ,c){
    a = a !== undefined ? a : 1 // verifica se A é undefined
    b = 1 in arguments? b : 1 // 1 equivale ao indice do argumento b a=0 b=1 c=2 
    c = isNaN(c) ? c : 1 // verifica se C recebeu um numero

    return a + b + c
}

// Melhor metodo
function soma3(a = 1,b = 1,c = 1){ // caso nao venha nada adotara o valor 1
    return a + b + c
}