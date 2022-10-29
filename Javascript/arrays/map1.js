const nums = [1, 2, 3, 4, 5]

// For com propósito        Faz uma transformação dos elementos de um array 
let resultado = nums.map(function(e) {     // mapear o elemento gerando assim o dobro dos elementos do array
    return e * 20
})

console.log(resultado)

// map não transforma o array atual ele gera um novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const paraReais = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')} `

resultado = nums.map(soma10).map(triplo).map(paraReais)
console.log(resultado)
