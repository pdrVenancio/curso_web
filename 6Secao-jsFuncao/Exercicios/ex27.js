function taxCrescimento( hc1 = 0, hc2 = 0, tx1 = 0, tx2 = 0){
    menorTx = tx1 <= tx2 ? tx1 : tx2
    menor = hc1 <= hc2 ? hc1 : hc2
    
    if( menor == hc1 && menorTx == tx1)
        return console.log(`O menor é ${menor} e nao passara ${tx2}`)
    if( menor == hc2 && menorTx == tx2)
        return console.log(`O menor é ${menor} e nao passara ${tx1}`)
    
    let cont = 0

    if(menor == hc1)
        while(hc1 <= hc2){
            hc1 += tx1
            hc2 += tx2
            cont ++
        }
    else
        while(hc2 <= hc1){
            hc1 += tx1
            hc2 += tx2
            cont ++
        }

    return console.log(`A menor criança: ${menor} - Levara: ${cont} anos para se tornar a maior`)
}

taxCrescimento(3,4,2,1)