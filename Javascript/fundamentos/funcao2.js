// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b)    {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma varivel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprrimir2 = a => console.log(a)
imprrimir2('Legal!!!')