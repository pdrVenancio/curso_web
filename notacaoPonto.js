console.log(Math.ceil(6.1))// ceil arredondamento

const obj1 = {}
obj1.mome = 'bola'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //this deixa o atributo publico
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj2.nome)