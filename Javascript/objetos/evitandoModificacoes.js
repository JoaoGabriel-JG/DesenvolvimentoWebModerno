// Object.preventExtensions (previne a extensão dos atributos em um obj)
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) 

// Object.seal
const pessoa = {nome: 'Sthefanie', idade: 19}
Object.seal(pessoa) // selar 
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Fernanda'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

// Object.freeze = selado + valores constantes
