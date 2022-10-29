const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500    
const fragil = produto => produto.fragil        // como fragil é boolean n precisa de parametro

console.log(produtos.filter(caro).filter(fragil))

// Filter: função callback que retorna verdadeiro ou falso
