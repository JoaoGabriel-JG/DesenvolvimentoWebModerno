const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Sthefanie', nota: 9.2 }
]

// Imperativo: ensinar os passos exatamente como funciona (o foco é em como deve ser feito)
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo: o foco é o que deve ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) // Reduce pode ser usado como agregador
console.log(total2 / alunos.length)


// Diferença: a abordagem Declarativa é mais interessante
//            por conta de reuso das funções em vários locais diferentes