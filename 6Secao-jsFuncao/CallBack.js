// Chamar de volta

const fabricante = ["Mercedes", "Aud", "BMW"]

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

// Para cada elemenlto encontrado no array ele chama a funcao imprimir
fabricante.forEach(imprimir) 

// usando como funcao anonima ele retorna e elementos do array
fabricante.forEach(function(a){
    console.log(a)
})

fabricante.forEach(fabricante => console.log(fabricante))

console.log("\nAULA 2\n")

const notas = [2.3, 2, 5, 6, 8, 9, 10]

//sem calback
let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)
notasBaixas = []

// Função filter 
// verifica um caso logico e se for verdadeiro ou falso é o que determina se o 
// elemento entra ou nao no array
notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)

console.log("\nAULA 3\n")

// No navegador
document.getElementsByTagName('body')[0].onclick = function (e)[
    console.log('O evento ocorreu!')
]

