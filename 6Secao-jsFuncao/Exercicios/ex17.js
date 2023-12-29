function aumento(s = 0,p = ""){
    switch(p){
        case "a":
            return (s + (s * 0.1)).toFixed(2)
        case "b":
            return (s + (s * 0.15)).toFixed(2)
        case "c":
            return (s + (s * 0.2)).toFixed(2)
        default:
            return "plano invalido..."
    }
}

console.log(aumento(100, "a"))
console.log(aumento(100, "b"))
console.log(aumento(100, "c"))
console.log(aumento(100, "v"))