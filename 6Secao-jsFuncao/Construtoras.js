// usamos como se fosse classe 

function Carro(velocidadeMaxima = 200, delta = 5){
    // Metodo privado
    let velocidadeAtual = 0

    // Usamos this para deixar publico

    // Metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    // Metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const nxs = new Carro(400, 50)
nxs.acelerar()
nxs.acelerar()
nxs.acelerar()
console.log(nxs.getVelocidadeAtual())


 