const passo1 = (ctx, next) =>{
    ctx.valor1 = "middle1"
    next()
}
const passo2 = (ctx, next) =>{
    ctx.valor2 = "middle2"
    next()
}
const passo3 = ctx =>{
    ctx.valor3 = "middle3"
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec( ctx, passo1, passo2, passo3)
console.log(ctx)