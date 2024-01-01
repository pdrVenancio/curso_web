const pilha = [1, 2, 3, 4, 5]
const add = [6, 7, 8, 9, 10]

for(let i = 0; i <= add.length - 1; i++){
    console.log(add[i])
    pilha.push(add[i])
}

console.log(pilha)