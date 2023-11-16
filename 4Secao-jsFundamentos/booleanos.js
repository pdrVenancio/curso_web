let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)// !! para testar se uma variavel é verdadeira ou falça

console.log("Os verdadeiros: ")
console.log(!!3) // Qualquer numero com a ecessao do 0
console.log(!!' ')//string preeenchida
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos: ")
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))
 
