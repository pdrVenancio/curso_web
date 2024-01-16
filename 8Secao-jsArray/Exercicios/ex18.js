// Criamos um vetor apenas com os preços usando o map, somamos tudo usando reduce encima do vet de precos 
const despessasTotais = vet => vet.map(p => p.preco).reduce((acumulado, atual) => acumulado += atual)

console.log(despessasTotais([{nome: 'jornal', categoria: 'informação', preco: 89.99},
                            {nome: 'jornal', categoria: 'informação', preco: 150}]))

console.log(despessasTotais([{nome: 'jornal', categoria: 'informação', preco: 3599.99},
                            {nome: 'jornal', categoria: 'informação', preco: 30999.90}]))