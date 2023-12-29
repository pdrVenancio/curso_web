function tipoTriangulo(l1 = 1, l2 = 1, l3 = 1){
    if (l1 == l2 && l2 == l3)
        console.log("equilatero")

    else if (l1 != l2 && l2 != l3)
        console.log("escaleno")

    else
        console.log("isoceles")
}

tipoTriangulo(2,2,2)
tipoTriangulo(2,2,3)
tipoTriangulo(1,2,3)