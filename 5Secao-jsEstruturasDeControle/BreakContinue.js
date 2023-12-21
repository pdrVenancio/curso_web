const num = [1,2,3,4,5,6,7,8,9,10]

for(x in num){
    if(x == 5)
        break
    console.log(num[x])
}

console.log("\nContinue\n")
for(y in num){
    if(y == 5)
        continue
    console.log(num[y])
}

//usamos rotulos para que o breack possa agir em no loop mais externo
console.log("\nRotulos\n")
externo: for(a in num){
    for(b in num){
        if(a == 2 && b ==3)
            break externo // for em que ele vai parar a execução
        console.log(`Par ( ${a} , ${b} )`)
    }
}