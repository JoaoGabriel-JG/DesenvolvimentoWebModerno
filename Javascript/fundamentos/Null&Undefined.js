/*
const a = {name: 'Teste'}
console.log(a)

const b = a         //atribuição por referencia / \ igualar objetos

b.name = 'Opa'
console.log(b)
console.log(a)
*/




let valor                   // não inicializada
console.log(valor)

valor = null                // valor não aponta para nenhum endereço de memoria / \ ausencia de valor
console.log(valor)
// console.log(valor.toString()) // ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined       // evitar atribuir o undefined
console.log(!!produto.preco)
// delete produto.preco     // tirar o atributo de forma eficiente
console.log(produto)

produto.preco = null        // sem preço
console.log(!!produto.preco)
console.log(produto)
