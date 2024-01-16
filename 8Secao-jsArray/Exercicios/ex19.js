// somamos todos os elementos do array usando reduce e dividimos pela quantidade de elementos
const mediaArray = vet => vet.reduce((acumulador, atual) => acumulador += atual) / vet.length


console.log(mediaArray([0, 10, 10]))