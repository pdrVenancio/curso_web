function calculadora(n1 = 0, op, n2 = 0){
    switch(op){
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "/":
            return (n1 / n2).toFixed(2)
        case "*":
            return n1 * n2
        default:
            return "funcao invalida"
    }
}

console.log(calculadora(1, "*", 3))
console.log(calculadora(1, "/", 3))
console.log(calculadora(1, "+", 3))
console.log(calculadora(1, "-", 3))