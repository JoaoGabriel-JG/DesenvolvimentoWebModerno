function meuObjeto () {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}`)
} 

obj1.falar()

obj2.nome = 'João'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo de tudo que eu não entendi quase nada mas vou entender

console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

// Não existe nenhum objeto depois do object.prototype 