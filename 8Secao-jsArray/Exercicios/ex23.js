// Usamos split para dividir a string em um array onde cada posição é uma palavra, depois basta saber o tamanho desse array
const contaPalavra = str => str.split(" ").length

console.log(contaPalavra("casa de da")) 