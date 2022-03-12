const nome = "João"
const concatenacao = "Olá " + nome + "!"

const template = `
    Olá             
    ${nome}!`           // interpolação e quebras de linha

console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()             //função arrow
console.log(`Ei... ${up('cuidado')}!`)
