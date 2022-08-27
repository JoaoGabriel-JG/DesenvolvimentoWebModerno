const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40              //evitar
 
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90                                    
}

console.log(prod2)


// '{ "nome": "Camisa Polo", "preco": 79.90 }'  JSON = formato textual do objeto

// objeto é o conjunto de chaves(indentificadores) e valores, atributos e comportamentos