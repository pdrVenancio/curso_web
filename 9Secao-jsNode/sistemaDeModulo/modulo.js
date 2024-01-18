// 1 arquivo = modulo

//Exportando
this.ola = 'Fala pessoal'
exports.bemvindo = 'Bem vindo'
module.exports.ateLogo = 'Ate mais'

// Substitui todas as exportações anteriores. Portanto, as linhas 
// exports.bemvindo e module.exports.ateLogo serão substituídas pelo novo objeto. 
module.exports ={ 
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}


