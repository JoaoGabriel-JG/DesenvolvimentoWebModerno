// Coleção dinâmca de par e chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 19
  },{
    nome: 'Ana',
    idade: 42
  }],
  calcularValorDoSeguro: function() {
    // ...
  }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.edereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores)