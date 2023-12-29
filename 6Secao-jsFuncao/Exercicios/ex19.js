function calcPedido(cod = 0, qnt = 0){
    switch(cod){
        case 100:
            return (3 * qnt).toFixed(2)
        case 200:
            return (4 * qnt).toFixed(2)
        case 300:
            return (5.5 * qnt).toFixed(2)
        case 400:
            return (7.5 * qnt).toFixed(2)
        case 500:
            return (3.5 * qnt).toFixed(2)            
        case 600:
            return (2.8 * qnt).toFixed(2)            
        default:
            return "Codigo nao existente"
    }
}
console.log(calcPedido(300, 5))
console.log(calcPedido(400, 5))
console.log(calcPedido(500, 5))
console.log(calcPedido(600, 5))
console.log(calcPedido(100, 5))
console.log(calcPedido(200, 5))
