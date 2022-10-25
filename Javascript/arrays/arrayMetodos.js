const jogadores = ['de Bruyne', 'Haaland', 'João Cancelo', 'Ruben Dias']
jogadores.pop()     // remove o ultimo elemento do array
console.log(jogadores)

jogadores.push('Bernardo')
console.log(jogadores)

jogadores.shift()   // remove o primeiro elemento do array
console.log(jogadores)

jogadores.unshift('Ederson')    // adiciona no inicio 
console.log(jogadores)

// splice pode adicionar e remover elementos

//adicionar
jogadores.splice(2, 0, 'Gundogan', 'de Bruyne')
console.log(jogadores)

// remover
jogadores.splice(3, 1)
console.log(jogadores)

const algunsJogadores = jogadores.slice(2)  // novo array a partir do indice dois
console.log(algunsJogadores)

const algunsJogadores2 = jogadores.slice(1, 4)
console.log(algunsJogadores2)
