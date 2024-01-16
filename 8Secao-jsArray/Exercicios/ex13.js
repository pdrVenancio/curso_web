const returnNumber = (vet) => vet.filter(item => typeof item === 'number')

console.log(returnNumber([1, 'z', 3, 'c', 4]))