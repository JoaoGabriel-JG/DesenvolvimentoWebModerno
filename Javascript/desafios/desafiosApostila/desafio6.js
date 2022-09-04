/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jSimples (capital, juros, tempo) {
    return capital + (capital * juros * tempo)
}

function jComposto (capital, juros, tempo) {
    return capital * (1 + juros) ** tempo
}

console.log(jSimples(100, 10 / 100, 2))
console.log(jComposto(100, 10 / 100, 2))
