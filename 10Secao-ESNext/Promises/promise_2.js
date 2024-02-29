// setTimeout(function(){
//     console.log('Exec callback...')
    
//     setTimeout(function(){
//         console.log('Exec callback...')
        
//         setTimeout(function(){
//             console.log('Exec callback...')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function resove(){
        setTimeout(function(){
            console.log('Executando promose...')
            resove()
        },tempo)
    })
}

esperarPor()
    //As duas linhas fazem a mesma coisa
    .then(() => esperarPor())
    .then(esperarPor)