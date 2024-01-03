const sequencia = {
    _valor: 1,
    get valor(){return this._valor++},
    // configuramos para que sempre seja uma sequencia crescente
    set valor(valor){
        if( valor > this._valor)
            this._valor = valor
    }
}

// chama o metodo get quando vamos mostrar um valor
console.log(sequencia.valor, sequencia.valor)

//chama o setter quando vamos atribuir um valor
sequencia.valor =  1000

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)