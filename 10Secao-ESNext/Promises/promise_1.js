const primeiroElemento = arrayOuString => arrayOuString[0]
const passarMinuscula = letra => letra.toLowerCase()

const lista = new Promise(function(resove){
    resove(['Ana', 'Jamili', 'Pedro'])
})

lista.then(primeiroElemento)
    .then(primeiroElemento)
    .then(passarMinuscula)
    //.then(v => console.log(v))
    .then(console.log)