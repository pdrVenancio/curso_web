const pont = "10 20 20 0 8 25 3 2 30 1"
const p2 = ""


function gerarArray(p = ""){

    if( p == "")
        return []
    
// Usamos split para separar cada elemento quando tiver a ocorrencia
// do espaço

// Usamos a função map para converter para int cada elemento desse vetor
// de string

    const listaInt = p.split(" ").map(numStr => parseInt(numStr,10))
    return listaInt
}
const listaInt = pont.split(" ").map(numStr => parseInt(numStr,10))

function pontuacao(p = "" ){
    listaPont = gerarArray(p)

    if (listaPont.length == 0)
        return console.log("Nao possui jogos")
    else{
        let bRec = 0
        let iPior = 0
        let pPont = listaPont[0]
        let mPont = listaPont[0]

        for( i = 0; i <= listaPont.length; i++){
            if( listaPont[i] > mPont){ 
                mPont = listaPont[i]
                bRec++
            }
            else if( listaPont[i] < pPont)
            {
                pPont = listaPont[i]
                iPior = i
            }
        }      

        return console.log(`Recorde: ${bRec}  Pior pontuação: ${iPior + 1}`)
    }     
}

pontuacao(pont)
pontuacao(p2)