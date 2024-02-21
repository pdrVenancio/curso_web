// Operador ... rest(juntar)/spread(separar)
// Usar rest como parametro de funções

// usar spread com obj
const funcionarios = { nome: "Pedro", salario: 1234.56}
const clone = {ativo: true, ...funcionarios}
console.log(clone)

// usar spread como array
const grupoA = ["Joao", "Pedro", "Gloria"]
const grupoFinal = ["Marcos", ...grupoA, "Joaquin"]
console.log(grupoFinal)
