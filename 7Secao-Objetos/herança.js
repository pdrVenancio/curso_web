// // aula 1
// console.log("AULA 1\n\n")

// const ferrari = {
//     modelo: 'f40',
//     velMax: 340
// }

// const volvo = {
//     modelo: 'v40',
//     velMax: 200
// }

// // __proto__ verifica no obj pai
// console.log(ferrari.__proto__)
// console.log(ferrari.__proto__ === Object.prototype)

// function MeuObj(){}
// console.log(typeof Object, typeof MeuObj)
// console.log(Object.prototype, MeuObj.prototype)

// aula 2
console.log("\n\nAULA 2\n")

// Cadeia de prototipos (prototype chain)

Object.prototype.atr0 = "z"
const avo = { atr1: "a"}
const pai = { __proto__: avo, atr2: "b", atr3: '1'}
const filho = {__proto__: pai, atr3: "c"}

console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)
