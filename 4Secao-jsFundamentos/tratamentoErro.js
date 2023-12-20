function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    throw 'deu merda'
}
function imprimirNomeGritado(obj){
    //Tenta rodar
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    //caso der algum erro    
    }catch(e){
        tratarErroELancar(e)
    
    //ocorrendo erro ou nao esse bloco é chamado
    }finally{
        console.log('final...   ')
    }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)