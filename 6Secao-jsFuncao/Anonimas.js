// Armazenando uma função anonima em uma variavel
const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b)) // Operação esta fazendo o papel da funcao soma
}

imprimirResultado(3, 4)
imprimirResultado(3, 4 , soma)
imprimirResultado(3, 4, function(x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) //posso passar uma arrow function anonima tbm

// Dentro de um obj
const pessoa ={
    falar: function (){
        console.log('Obaaaaaa')
    }
}