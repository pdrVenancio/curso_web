function plano(id = 0){
    valor  = 100
    if( id < 10 )
        return valor += 80

    else if( id >=10 && id <=30)
        return valor += 50

    else if(id > 30 && id <= 60)
        return valor += 95 

    else 
        return valor += 130
}
console.log(plano(5))
console.log(plano(24))
console.log(plano(40))
console.log(plano(80))
