function cedulas( din = 0){
    cont100 = 0
    cont50 = 0
    cont10 = 0
    cont5 = 0
    cont1 = 0

    d = 0

    while(d != din){
        if( d + 100 <= din){
            d +=100
            cont100++
        }
        else if( d + 50 <= din){
            d += 50
            cont50++
        }
        else if( d + 10 <= din){
            d += 10
            cont10++
        }
        else if( d + 5 <= din){
            d += 5
            cont5++
        }
        else if( d + 1 <= din){
            d += 1
            cont1++
        }
    }

    return console.log(`100 - ${cont100}  50 - ${cont50} 10 - ${cont10} 5 - ${cont5} 1 - ${cont1}`)
}

cedulas(500)
cedulas(18)