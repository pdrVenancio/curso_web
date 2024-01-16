// Filter: filtrar as strings que passam no teste
// Substrung: cria uma substring do tamanho de pes para podermos compara-las
// Vemos se a substring é igual a string de pesquisa
const pesquisa = (pes , strs) => strs.filter(str => str.substring(0, pes.length) == pes ? true : false) 


console.log(pesquisa("pro", ["projeto", "professor", "prato", "porta"]))