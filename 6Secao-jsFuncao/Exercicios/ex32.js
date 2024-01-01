let num = [2, 3, 4, 5, 7, 10, 8]

function calcMedia(num = []){
    if(num == [])
        return 0

    let soma = 0
    for(i = 0; i <= num.length - 1; i++){
        soma += num[i]
    }
        
    let media = soma / num.length

    return console.log(`Media: ${media.toFixed(2)}`)
}

calcMedia(num)