class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()

// Funciona melhor no navegador
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('pedro')
p2.falar()

// DESAFIO FUNÇÃO CONSTRUTORA

function Pessoa1(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa1('Joa')
p3.falar()
console.log(p3.nome)

