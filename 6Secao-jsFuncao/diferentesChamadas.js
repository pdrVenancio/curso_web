// Criar função literal

// Posso chamar a função antes de declara-la
function f1(){}

// armazenar em uma variavel
const f2 = function(){}

// Armazenar em um array
const array = [function (a, b) {return a + b}, f1, f2]
console.log(array[0](2,3))

// Armazenar em um obj
const obj = {}
obj.falar = function() {return 'aaaaaa'}
console.log(obj.falar())

// Passar como parametro 
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

// Uma fução para retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)
