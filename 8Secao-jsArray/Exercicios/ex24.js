const veriCarac = (str, c) => str.split(c).length - 1

// Usamos [...str] para considerar a string um array de caracteres.
// filter para criarmos um array apenas com o caracter procurado encontrado na frase e retornamos seu tamanho
const veriCarac2 = (str, c) => [...str].filter(l => l == c).length

console.log(veriCarac("casa", "c"))
console.log(veriCarac2("casa", "a"))