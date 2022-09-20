// Toda a função tem um atributo .prototype

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {     // reverte uma string 
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())


// Tomar cuidado com efeitos colaterais (substituir comportamentos que já existam)
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())
