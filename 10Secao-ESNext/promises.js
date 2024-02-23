// Temos uma mágica que nos permite falar algo depois de um certo tempo.

function falarDepois(segundos, frase){
    // Esta é a parte mágica que promete que iremos falar depois de um tempo.
    return new Promise((resolve, reject) => {
        // Agora, vamos esperar o tempo passar.
        setTimeout(() =>{
            // Depois do tempo passar, vamos cumprir nossa promessa e falar o que foi pedido.
            resolve(frase)
        }, segundos * 1000) // Aqui, nós convertendo os segundos para milissegundos, que é o que o temporizador entende.
    })
}

// Agora, vamos usar nossa mágica para falar "Que legal!" depois de 3 segundos.
falarDepois(3, 'Que legal!')
    // Quando terminarmos de falar, queremos adicionar algo extra, como um truque de mágica!
    .then(frase => frase.concat("!?!?")) // Adicionamos "!?!!" à nossa frase.
    // Depois do truque, queremos mostrar para todos o que fizemos.
    .then(outraFrase => console.log(outraFrase))
    // Ah, mas se algo der errado com a mágica, precisamos de um plano de backup!
    .catch(e => console.log(e)) // Se algo der errado, vamos mostrar o problema.
