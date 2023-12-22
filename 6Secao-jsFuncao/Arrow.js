let dobro =  function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'ola'
console.log(ola())

// AULA 2
console.log("\nAULA 2\n ")

function Pessoa(){
    this.idade = 0

    // função que usa intervalo para executar algo   
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// AULA 3
console.log("\nAULA 3\n ")

// Usando função normal
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)
const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Usando arrow function
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// Nao é possivel usar bind para mudar a referencia do this em uma arrow function
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)