function getIntAlearorio(min, max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = 0

while (op != -1)
{
    op = getIntAlearorio(-1, 10)
    console.log(`Numero sorteado ${op}`)
}

//AULA 2
console.log(`\n\nAula 2\n`)

do{
    op = getIntAlearorio(-1, 10)
    console.log(`Numero sortiado ${op}`)
}while(op != -1)

