const anonimo = process.argv.indexOf('-c') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write("Fala anonimo")
    process.exit()
}else{
    process.stdout.write("Digite seu nome: ")
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n','')

        process.stdout.write(`falaaa ${nome} \n `)
        process.exit()
    })
}