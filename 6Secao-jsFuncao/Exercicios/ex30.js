let num = [2, 3, 4, 5, 7, 10, 8]

function calcMaiorMenor(num = []){
    if(num == [])
        return 0

    let menor = num[0]
    let maior = num[0]

    for(i = 0; i <= num.length; i++){
        if(menor >= num[i])
            menor = num[i]
        if(maior <= num[i])
            maior = num[i]
    }
    return console.log(`menor: ${menor} - maior: ${maior}`)
}

calcMaiorMenor(num)