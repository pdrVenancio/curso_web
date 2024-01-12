const quseArray = {0: 'Pedor', 1:'Joao', 2: 'jose'}
console.log(quseArray)

Object.defineProperty(quseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quseArray[0])

const array = ['pedor', 'joao', 'raphael']

console.log(quseArray.toString(), array)