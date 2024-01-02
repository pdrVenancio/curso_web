function imprimir(n1 = 0, n2 = 100){
    if(n1 > n2){
        let aux = n1
        n1 = n2
        n2 = aux
    }

    for(;n1 <= n2; n1++){
        if(n1 % 2 != 0)
            console.log(n1)       
    }
}

imprimir(200,100)