 const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
 }

// mostra as chaves (nome, idade, peso)
console.log(Object.keys(pessoa))
// valores de cada chave
console.log(Object.values(pessoa))
// gera arrays com as chave e valores
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

// Usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

// Definir propriedade de um obj
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // listado
    writable: false, // nao posde ser alterada
    value: '01/02/2000'
})

pessoa.dataNascimento = '01/03/99999'
console.log(pessoa.dataNascimento)

// Concateando varios obj

const destino = {a : 1}
const o1 = {b : 2}
const o2 = {c : 3, a : 4}

const obj = Object.assign(destino, o1, o2)

Object.freeze(obj)
obj.c = 999
console.log(obj)