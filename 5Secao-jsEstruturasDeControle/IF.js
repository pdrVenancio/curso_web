//AULA 1
console.log('AULA 1\n\n')
function soBoaNota(nota){
    if(nota >= 7 ){
        console.log(' aprovado com: '+ nota)
    }
}

soBoaNota(5)
soBoaNota(9)

function seForEuFalo(valor){
    if (valor){
        console.log('É verdadeeee... ' + valor)
    }
}

seForEuFalo()
seForEuFalo(null)
seForEuFalo(undefined)
seForEuFalo(NaN)
seForEuFalo('')
seForEuFalo(0)
seForEuFalo(-1)
seForEuFalo(' ')
seForEuFalo('?')
seForEuFalo([])
seForEuFalo([1, 2])
seForEuFalo({})

//AULA 2
console.log('\n\nAULA 2 ELSE\n\n')

function imprimiNota(nota){
    if (nota >= 6)
        console.log('aprovado')
    else 
        console.log('reprovado')
}

imprimiNota(10)
imprimiNota(5)

//AULA 3
console.log('\n\nAULA 3\n\n')
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if (nota.entre(9, 10))
        console.log('Quadro de honra!')
    else if (nota.entre(7, 8.99))
        console.log('Aprovado')
    else if(nota.entre(0, 6.99))
        console.log("Reprovado")
    else
        console.log('Nota invalida')
}

imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(5)
