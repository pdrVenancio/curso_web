// Função que retorna um objeto

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProd(nome, preco){
    return{
        // nome : nome,
        // preco : preco
        nome,
        preco
    }
}

console.log(criarProd("carne", 12))