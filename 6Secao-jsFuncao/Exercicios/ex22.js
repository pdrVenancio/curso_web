const pagamento = (m = 1, v = 0) => m == 1 ? v : valoPg = Math.pow(v * (1 + 0.05), m - 1)

console.log(pagamento(3, 100))


