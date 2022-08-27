// novo recurso do ES2015
// Objetos

const pessoa = {
    nome: 'Ana',
    idade: 16,
    endereco: {
        logradouro: 'Rua Maneira Real',
        numero: 2022
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
