const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'    // operador ternario, 1ºparte 'nota >= 7' Operador relacional T or F
                                                                  // 2º parte ': Reprovado' caso a expressão seja falsa
console.log(resultado(7.1))
console.log(resultado(6.7))

