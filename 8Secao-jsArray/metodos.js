const piloto = ['vetel', 'Max', 'Raikkonen', 'Massa']

// remove o ultimo elemento
piloto.pop()
console.log(piloto)

// remove da primeira posição
piloto.shift()
console.log(piloto)

// adiciona no fim da lista
piloto.push('Pedrao')
console.log(piloto)

// addd no inicio
piloto.unshift('Jova')
console.log(piloto)

// Emandar
// add
piloto.splice(1, 0, 'Jica', 'Thiago')
console.log(piloto)

// remover
piloto.splice(1, 2)
console.log(piloto)


// Fatiar
// gera um novo array a partir da posição passada
const algunsPilotos1 = piloto.slice(2)
console.log(algunsPilotos1)

// da posição passada ate uma posição antes da posição de final
const algunsPilotos2 = piloto.slice(2, 4)
console.log(algunsPilotos2)
 