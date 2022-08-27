Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log(`Sua nota foi ${nota}, e você está no Quadro de Honra, parabéns!!!!`)
    } else if(nota.entre(7, 8.99)) {
        console.log(`Sua nota foi ${nota}, e você está Aprovado, parabéns!`)
    } else if(nota.entre(4, 6.99)) {
        console.log(`Sua nota foi ${nota}, e você está de Recuperação.`)
    } else if(nota.entre(0, 3.99)) {
        console.log(`Sua nota foi ${nota}, e você está Reprovado.`)
    } else {
        console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
