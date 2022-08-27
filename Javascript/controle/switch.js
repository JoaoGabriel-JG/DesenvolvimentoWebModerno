const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log(`Sua nota foi ${nota}, e você está no Quadro de Honra, parabéns!!!!`)
            break
        case 8: case 7:
            console.log(`Sua nota foi ${nota}, e você está Aprovado, parabéns!`)
            break
        case 6: case 5: case 4:   
            console.log(`Sua nota foi ${nota}, e você está de Recuperação.`)
            break
        case 3: case 2: case 1: case 0:
            console.log(`Sua nota foi ${nota}, e você está Reprovado.`)
            break     
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)

imprimirResultado(11)
