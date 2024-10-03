async function consultaResponsaveisProduto() {

    let request = await fetchData(2128, `${null}`)
    let response = await request
  
    const SELECT_responsavel = document.querySelector('#consulta-responsaveis-ce-mult') 
    
    response.map(e =>{
        if(e.Grupo == 'SSCR_ENGENHARIA_PRODUTO'){
            const option = document.createElement('option')
    
            option.innerText = e.FUNCIONARIO
            option.value = e.Matricula
    
            SELECT_responsavel.add(option)
        }
    })

    return 
}

async function casoCE(){
    $('#modal_responsaveis_ce').modal('show');
    await consultaResponsaveisProduto()
    
    const BTN_salvar = document.querySelector('#btn-salvar-responsaveis-ce')

    return BTN_salvar.addEventListener('click', () => {
        const lista_responsaveis_ce = $(`#responsavei_email_ce`).val();
        const responsaveis_ce = lista_responsaveis_ce.join(',').toString();
    
        if(responsaveis_ce == '' || responsaveis_ce == undefined){
            return [false, '']
        }
    
        return [true, responsaveis_ce]
    })
}

// AltPV 31 - Limitar acesso ao botao Tela PM
async function salvarAnotacao(){
    let verifica_acesso = await verificaAcessoPMO()

    let status = $(`#status-global`).val();
    let prioridade = $(`#prioridade-sscr`).val();
    let anotacao = $(`#anotacao-novo`).val();
    let tipo_processo = $(`#tipo`).val()
    let recorrencia
    let responsaveis_ce
    const tipoAnotação = 2;

    if(anotacao == undefined){
        anotacao = '';
    }
    if(status == 5){
        recorrencia = await casoRecorrencia()
        if(recorrencia[0] == false){
            return
        }
    }  

    // verifica CE
    if(tipo_processo == 1 && status == 2){
        console.log('opa')
        
        responsaveis_ce = await casoCE()
        console.log(responsaveis_ce)
        if(responsaveis_ce[0] == false){
            return
        }
    }

    console.log('deu merda: ', responsaveis_ce)
}
