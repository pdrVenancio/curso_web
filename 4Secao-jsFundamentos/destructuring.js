//objetos usamos {}
//array usamos   []

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100,
    }
}

const {nome, idade} = pessoa // tire do obj pessoa o atributo de nome e idade
console.log(nome,idade)

const {nome: n, idade: i} = pessoa // n = nome i = idade
console.log(n,i)

const {sobreNome, bemHumorado = true} = pessoa // passa um valor como padrao em caso de nao vinda de atributo
console.log(sobreNome, bemHumorado)

const {endereco:{logradouro,numero,cep}} = pessoa //dado alinhado
console.log(logradouro,numero,cep)
