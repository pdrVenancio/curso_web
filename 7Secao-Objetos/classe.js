class Lancamento{
    constructor(nome = "generico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.listaLancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.listaLancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.listaLancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("salario", 3000)
const contaDeLuz = new Lancamento("luz", -220)

const contas = new CicloFinanceiro(6 , 2019)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

// AULA 2
console.log("\n\nAULA 2\n")
// Como funciona aherança em classe

class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

// Definindo que pai herda de avo
class Pai extends Avo{
    constructor(sobrenome, proficao = 'Professor'){
        super(sobrenome) // define que sobrenome de da classe pai
        this.proficao = proficao
    }

}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)