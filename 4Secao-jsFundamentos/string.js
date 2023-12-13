const nome =  "Pedro"

console.log(nome.charAt(3)) // retorna o caracter da posição dada
console.log(nome.codePointAt(3)) //pega o valor referente a tabela unicode
console.log(nome.indexOf('3')) // retorna o indixe  referente ao valor passado

console.log(nome.substring(1)) //impprime do index 1 ate o final
console.log(nome.substring(0 , 3)) //do 0 ate o 2

console.log('pedro '.concat(nome).concat(" !"))//concatenar
console.log(nome.replace(1,'h')) //substitui o indixe 3
 
console.log('Pedro,Ana,Joao'.split(','))//separa em um arry qubrando onde tiver virgulas
  
// TEMPLATE STRING
const template = `ola ${nome}!`
console.log(template)

// Função Arrow
const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}!`)
