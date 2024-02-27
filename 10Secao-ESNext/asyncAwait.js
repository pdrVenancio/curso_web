const http = require('http')

// Esta função vai nos ajudar a obter informações sobre uma turma específica.
const getTurma = (letra) => {
    // Aqui dizemos onde estão as informações da turma na Internet.
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    // Vamos prometer que faremos a solicitação e vamos nos lembrar do que prometemos.
    return new Promise((resolve, reject) => {
        // Aqui fazemos a solicitação de verdade.
        http.get(url, res => {
            // Vamos guardar as informações que recebermos aqui.
            let resultado = ''
    
            // Sempre que recebermos mais informações, vamos juntá-las com as que já temos.
            res.on('data', dados => {
                resultado += dados
            })
    
            // Quando terminarmos de receber informações, vamos cumprir nossa promessa e dizer o que conseguimos.
            res.on('end', () => {
                // Vamos tentar entender o que recebemos e contar para quem nos pediu.
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    // Se algo deu errado, vamos contar também.
                    reject(e)
                }
            })
        })
    })
}

// Com o objetivo de simplificar o uso de promises...
let obterAluno = async ()=>{
    const ta = await (getTurma('A'))
    const tb = await (getTurma('B'))
    const tc = await (getTurma('C'))
    return [].concat(ta, tb, tc)
}

obterAluno()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))