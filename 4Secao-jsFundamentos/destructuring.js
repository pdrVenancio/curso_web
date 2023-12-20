//objetos usamos {}
//array usamos   []
console.log("Usando com Objetos\n")
const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100,
    }
}

const {nome, idade} = pessoa // tire do obj pessoa o atributo de nome e idade
console.log(nome,idade)

const {nome: n, idade: i} = pessoa // n = nome i = idade
console.log(n,i)

const {sobreNome, bemHumorado = true} = pessoa // passa um valor como padrao em caso de nao vinda de atributo
console.log(sobreNome, bemHumorado)

const {endereco:{logradouro,numero,cep}} = pessoa //dado alinhado
console.log(logradouro,numero,cep)

//com array
console.log("\n\nUsando com arrays\n")

const [a] =[10]
console.log(a)

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//array de array
const [, [,nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//Função
console.log("\n\nUsando com fiuncao")

function rand(min = 10, max = 1000){// usando o destructuring com valores padroes
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(obj)

// array dentro de um parametro de uma função
console.log("\n\nFuncao com array")

function randArray([min = 0, max = 100]){
    if (min > max) [min, max] = [max, min] //Usando destructuring para inverter os valores caso o valor de min seja maior q o max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(randArray([50, 40]))
console.log(randArray([900]))
console.log(randArray([, 10]))
console.log(randArray([]))