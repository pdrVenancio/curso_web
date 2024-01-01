function veriString(str = []){
    if( str == [])
        return 0

    let pStr = str[0]
    let caracter = []

    let res = false
    
    for(let i = 0; i <= pStr.length - 1; i++){
        caracter[i] = pStr[i]
    }

    for(let i = 0; i <= str.length - 1; i++){
        strAtual = str[i]
        for(let j = 0; j <= strAtual.length - 1; j++){
            
            // Verifica se o caracter atual esta presente no vetor controle
            if(caracter.includes(strAtual[j]))
                res = true 
            else
                return false              
        }            
    }

    return res
}

console.log(veriString(["n", "cba", "bacf"]))