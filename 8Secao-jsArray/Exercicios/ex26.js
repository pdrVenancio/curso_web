    const retiraVogal = frase => {
        let vogais = ['a','e','i','o','u']
        vogais.forEach(vogal => frase = frase.replace(vogal, ''))
        return frase
}
const retiraVogal2 = frase => frase.replace(/[aeiou]/, "")
console.log(retiraVogal2("casar"))