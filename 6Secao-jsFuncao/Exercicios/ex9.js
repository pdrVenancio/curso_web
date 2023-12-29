function verProximidade(n = 0){
    if(n % 5 == 0 )
        return n
    else if((n + 1) % 5 == 0)
        return n + 1 
    else if((n + 2) % 5 == 0)
        return n + 2
    else if ((n + 3) % 5 == 0)
        return n + 3 
    else
        return n
}

function arredondaNota(n = 0){
    if( n < 0 || n > 100)
        return console.log("Nota invalida")

    if( n < 37)
        return console.log("reprovado")
    
    n = verProximidade(n)

    if( n >= 40)
        return console.log(`Aprovado: ${n}`)
}

arredondaNota(37)
arredondaNota(38)
arredondaNota(39)
arredondaNota(36)
arredondaNota(99)



