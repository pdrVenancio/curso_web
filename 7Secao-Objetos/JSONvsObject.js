// Nao consegue salvar funcoes
const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)) // Convertendo um obj para json

console.log(JSON.parse('{"a": 1,"b": 2}')) // sempre limitar os atributos usando aspas duplas

console.log(JSON.parse('{"a": 1.8,"b": "string", "c": true, "d": {}, "e": []}'))