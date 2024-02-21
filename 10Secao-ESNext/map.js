const tecnologias = new Map()
tecnologias.set('react', {framework : false})
tecnologias.set('angular', {framework : true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chaveVariadas = new Map([
    [function() {}, 'funcao'],
    [{}, 'obj'],
    [123, 'Numero']
])

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// has verifica
console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
// size tamanho do vetor map
console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(123, 'b')
console.log(chaveVariadas)