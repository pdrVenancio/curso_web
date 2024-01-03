// Coleção dinâmica de pares chave/valor

const produto = new Object
// Criando atributos
produto.nome = "Cadeira"
produto['marca'] = "Generica"
produto.preco = 200

// Acessando obj
console.log(produto)

// Deletando atributo
delete produto.preco
delete produto['marca']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario:{
        noem: 'Rei',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // Array de obj
    condutores: [{
        nome: "jr",
        idade: 19
    },{
        nome: "Ana",
        idade: 42
    }],
    calculaSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaSeguro

console.log(carro)
console.log(carro.condutores)// Undefined
console.log(carro.condutores.length)
// Erro por conta de tentar acessar algo 
// que é undefined