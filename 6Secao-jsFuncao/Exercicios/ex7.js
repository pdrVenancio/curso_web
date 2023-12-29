const calcDelta = (a = 0, b = 0, c = 0) => Math.pow(b, 2) - 4 * a * c

function basc(a = 0, b = 0, c = 0) {
    del = calcDelta(a,b,c)

    if(del < 0 )
        console.log("Delta negativo!\n")
    else{
        x1 = -b + Math.sqrt(del) / 2 * a
        x2 = -b - Math.sqrt(del) / 2 * a

        console.log("X1 = " + x1 + " X2 = " +x2)
    }
}

basc(3,-5,12)
basc(1,12,-13)