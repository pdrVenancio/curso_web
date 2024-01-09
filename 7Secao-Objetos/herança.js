// aula 1
console.log("AULA 1\n\n")

const ferrari = {
    modelo: 'f40',
    velMax: 340
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

// __proto__ verifica no obj pai
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

function MeuObj(){}
console.log(typeof Object, typeof MeuObj)
console.log(Object.prototype, MeuObj.prototype)

// aula 2
console.log("\n\nAULA 2\n")

// Cadeia de prototipos (prototype chain)

Object.prototype.atr0 = "z" // Tomar muito cuidado ja que impacta todos os obj do programa
const avo = { atr1: "a"}
const pai = { __proto__: avo, atr2: "b", atr3: '1'}
const filho = {__proto__: pai, atr3: "c"}

console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax)
            this.velAtual+= delta
        else
            this.velAtual = this.velMax

    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = { 
    modelo: "F40",
    velMax: 340 // shadowing - sombreando o valor do obj pai
}

const volvo = {
    modelo: "V40",
    // shadowing uma funcoa
    status() { 
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo o relação de prototipo (pai e  filho)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())

// aula 3
console.log("\n\nAULA 3\n")

const pai = {nome: "ciao", corCabelo: "preto"} 
const filh1 = Object.create(pai)

filh1.nome = "ana"
console.log(filh1.corCabelo)

const filh2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filh2.nome)

filh2.nome = "carla"
console.log(`${filh2.nome} tem o cabelo  ${filh2.corCabelo}`)

for( let key in filh2)
    filh2.hasOwnProperty(key) ? console.log(key) : console.log(`Por heranca: ${key}`)


// aula 5
console.log("\n\nAULA 5\n")

function MeuObj(){}
console.log(MeuObj.prototype)

const obj1 = new MeuObj
const obj2 = new MeuObj

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObj.prototype === obj1.__proto__)

MeuObj.prototype.nome = "Joaquin"
MeuObj.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
} 

obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObj.prototype
obj3.nome = "obj3"
obj3.falar()

// Resumindo relações verdadeiras
console.log((new MeuObj).__proto__ === MeuObj.prototype)
console.log(MeuObj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null )

// aula 5
console.log("\n\nAULA 5\n")

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Pedro Venancio'.reverse())

Array.prototype.first = function () {
    return this[0] // retorna o primeiro elemento do array
}
console.log([1, 2, 3, 4, 5, 6].first())
console.log(['a', 'c', 'g', 'g'].first())

// aula 6
console.log("\n\nAULA 6\n")

function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Ben vinid', 123)
const aula2 = new Aula('inte', 456)
console.log(aula1, aula2)

// Simulando o operador new
//           (função, parametros)
// ...param -> concatena todos os paramentros passados em um array
function novo(func, ...param){
    const obj = {}
    obj.__proto__ = func.prototype
    func.apply(obj, param)
    return obj
}

const aula3 = novo(Aula, 'Bemvin', 123)
console.log(aula3)





