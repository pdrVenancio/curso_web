
// Tratamento de erro com Promise
function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) =>{
        try{
            // linha com o erro
            con.log('rammm')
            if(Math.random() > chanceDeErro){
                reject("Ocorreu um erro...")
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando' , 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
       // err => console.log(`Erro especifico: ${err}`)
    )
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(console.log('Fim!'))