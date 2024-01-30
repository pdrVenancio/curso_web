const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// get - Obtem informações do servidor
// Para obiter o conteudo do arquivo usamos a função parametro 
// de THEN()
axios.get(url).then(response =>{
    // response.data possui a informação de cada funcionario
    const funcionarios = response.data
    console.log(funcionarios)
    
    // Loop para ver apenas os nomes dos funcionario
    // for(let fun of funcionarios){
    //     console.log(fun.nome)
    // }
})

