//                  (valor, indice, array)
apr.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

apr.forEach(nome => console.log(nome))

const exibirAprovados = apr => console.log(apr)
apr.forEach(exibirAprovados)

// Aula 2
console.log("\n\nAula 2\n")

Array.prototype.forEach2 = function (callback){
    for(let i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

apr.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)   
})

// Aula 2
console.log("\n\nAula 2\n")
