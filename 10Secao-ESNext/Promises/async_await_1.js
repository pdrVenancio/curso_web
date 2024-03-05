function EsperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// EsperarPor(2000)
//     .then(() => console.log("Executando promise 1..."))
//     .then(EsperarPor)
//     .then(() => console.log("Executando promise 2..."))
//     .then(EsperarPor)
//     .then(() => console.log("Executando promise 3..."))
//     .then(EsperarPor)

function retornarValor(){
    return new Promise(function(resolve){
        setTimeout(() => resolve(10), 5000)
    })
}

// cada metodo assim que é reolvido passa para o proximo 
async function Executar(){
    let valor = await retornarValor()

    await EsperarPor(1500)
    console.log(`Async/await ${valor}...`)

    await EsperarPor(1500) 
    console.log(`Async/await ${valor + 1}...`)

    await EsperarPor(1500)
    console.log(`Async/await ${valor + 2}...`)

    return valor + 3
}

async function ExecDeVerdade(){
    const valor = await Executar()
    console.log(valor)
}

ExecDeVerdade()

//Executar().then(console.log)