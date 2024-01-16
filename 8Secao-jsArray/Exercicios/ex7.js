const veriIntervalo = (min, max, n, inc) =>{
    if(inc)
       return n >= min && n <= max ? true : false
    else
        return n > min && n < max ? true : false
}
console.log(veriIntervalo(5, 9, 6, false))