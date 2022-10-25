const aprovados = ['Sthefanie', 'João', 'Rafael', 'Roberto']

aprovados.forEach(function(nome, indice) {      // array como terceiro parametro
    console.log(`${indice + 1}) ${nome}`)       // percorrendo o array utilizando função
    // console.log(array)
})

aprovados.forEach(nome => console.log(nome))    // usando arrow function pegando somente um parametro

const exibirAprovados = aprovado => console.log(aprovado)   // armazenando a função em variavel
aprovados.forEach(exibirAprovados)

