for (let i = 1; i <= 10; i++)
{
    console.log(i)
}

const n = [1,2,3,4,5,6]

for(i = 0; i <= n.length; i++)
{
    console.log(i)
}

// For in
console.log('\nFOR IN\n\n')
for(let i in n)
{
    console.log(i, n[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Julia',
    idade: 29,
    peso: 60
}
for (let atributo in pessoa)
{
    console.log(`Atributo: ${atributo} -- Valor armazenado: ${pessoa[atributo]}`)
}
