// nao aceita repetição / nao idexada
const times = new Set()
times.add('fla').add('corigao').add('vasco').add('fla')
console.log(times)
console.log(times.size)

console.log(times.has('fla'))
times.delete('fla')
console.log(times.has('fla'))

const nomes = ['luca', 'joao', 'luca', 'pedro']
const setNomes = new Set(nomes)
console.log(setNomes)