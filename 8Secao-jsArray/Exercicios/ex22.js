const sorteo = n =>{
    let sort = Math.floor(Math.random() * 10) + 1
    return n == sort ? `Paarabens n sorteado ${sort}` : `Que pena ${sort}`
}

console.log(sorteo(3))