// Quando criamos um funçãod da maneira padrão usando function
// o THIS pode variar  
// Usando arrow function o THIS nao varia
// o THIS represenda o escopo em que foi definida

// AULA 2
// THIS na função BIND

const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // Passamos p contexto em que a função esta
falarDePessoa()                                 // o THIS sera o que voce passou para a funcao bind

// AULA 3
// Podemos travar o THIS usando o bind ou passando o valor dele para uma constante
// assim ele sempre vai estar referenciando a pessoa
console.log("\nAula3\n")

function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa