let din = 0.1 + 0.2

// limitamos as casas decimais
let dinArredondado = din.toFixed(2)

// substituimos o . por ,
let dinFormatado = dinArredondado.replace('.',',')

// printando os resultados
console.log("R$ " + dinFormatado)

