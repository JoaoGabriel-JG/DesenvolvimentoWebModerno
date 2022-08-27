// par nome/valor

const saudacao = 'Opa'  // contexto léxico = local fisico do armazenamento da variável

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 19,
    peso: 80,
    endereco: {
        logradouro: 'Rua Maneira',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)