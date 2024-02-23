for(let letra of 'pedro'){
    console.log(letra)
}

const assunto = ['casa', 'trabalho', 'viajar']
for(let a of assunto){
    console.log(a)
}
for(let a in assunto){
    console.log(a)
}

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for(let assunto of assuntoMap.keys()){
    console.log(assunto)
}

for(let assunto of assuntoMap.values()){
    console.log(assunto)
}

// desestruturando
for(let [ch, vl] of assuntoMap.entries()){
    console.log(ch,vl)
}

const s = new Set(['q', 'e', 'f'])
for(let x of s){
    console.log(x)
}