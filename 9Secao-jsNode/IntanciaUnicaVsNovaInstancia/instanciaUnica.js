// Node faz cache 

// Isso é, esse finção pode ser chamada por diferentes variaveis 
// que ela vai enteder como sendo a msm variavel chamando
// Para evitar isso usamos uma função fractory
module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}