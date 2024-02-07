// Usamos freeze para que o obj nao posssa mais ser aalterado
globalThis.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'

})