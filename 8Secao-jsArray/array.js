// Array é um obj
// Dinamica
// É uma estrutura de dado heterogenea (pode armazer diferentes tipos em um msm array)

let aprovados = new Array('BIa', 'Carlos', 'Ana')
console.log(aprovados)

aprovados['BIa', 'Carlos', 'anoa']
console.log(aprovados[0], aprovados[1], aprovados[2], aprovados[3])

// add elemento
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Pedro'
console.log(aprovados.length)

console.log(aprovados)

// Funçoes

// Ordenar 
aprovados.sort() 
console.log(aprovados)

// Excluindo 

// Deleta do dado e atribui undefined na posição
delete aprovados[1]
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']

// Emendar
//.splice(posição inicio, quantas posiçoes a frente vao ser excluidas, elemento que seram add a partir da posição de isicio)
aprovados.splice(1, 0, 'Elemento 1', 'elemento2')
console.log(aprovados)

