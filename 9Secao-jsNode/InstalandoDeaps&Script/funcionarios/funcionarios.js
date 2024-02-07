const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// get - Obtem informações do servidor
// Para obiter o conteudo do arquivo usamos a função parametro 
// de THEN()

// fazendo desafio filtro no json
const chineses = f => f.pais == 'China'
const mulheres = f => f.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response =>{
    // response.data possui a informação de cada funcionario
    const funcionarios = response.data
    //console.log(funcionarios)

    // Mulhere chinesa com menor salario
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)

    
    // Loop para ver apenas os nomes dos funcionario
    // for(let fun of funcionarios){
    //     console.log(fun.nome)
    // }
})

