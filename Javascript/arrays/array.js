console.log(typeof Array, typeof new Array)

let aprovados = new Array('Sthefanie', 'João', 'Rafael')
console.log(aprovados)

aprovados = ['Sthefanie', 'João', 'Rafael']
console.log(aprovados[0])
console.log(aprovados[1])       // acessando indices
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Pereira'        
aprovados.push('Fernanda')      // adicionar um elemento ao indice
console.log(aprovados.length)

aprovados[9] = 'Roberto'
console.log(aprovados.length)           // ver o tamanho do array
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()        // reogarnização 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Sthefanie', 'João', 'Rafael']
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')        // excluir e adicionar elementos em um indice
console.log(aprovados)

/*
Array:

É uma estrutura dinamica
Indexada a partir do 0 (indice)
É um Objeto
*/
