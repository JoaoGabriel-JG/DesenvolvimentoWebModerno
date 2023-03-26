const escola = [{
    nome: 'Turma 3E',
    alunos: [{
        nome: 'Vinicius',
        nota: 7.1
    }, {
        nome: 'Thiago',
        nota: 9.3
    }]    
}, {
    nome: 'Turma 3A',
    alunos: [{
        nome: 'Sattim',
        nota: 7.9
    }, {
        nome: 'Victor Hugo',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 7.1, 9.3 ], [ 7.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)