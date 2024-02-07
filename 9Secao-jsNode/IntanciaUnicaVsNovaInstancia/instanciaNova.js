// Usando uma função fractory para evitar o cache

module.exports = () => {
     return({
        valor : 1,
        inc (){
            this.valor++
        }
     })
}