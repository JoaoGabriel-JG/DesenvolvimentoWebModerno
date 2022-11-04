// Função que serve para transformar um array em um elemento que acumula 
// e passa os valores para os proximos elementos 

const alunos = [
    { nome: 'João', nota: 8.2, bolsista: false },
    { nome: 'Sthefanie', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Rafael', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado.toFixed(2))
