// Cadeia de prototipo (prototype chain)

Object.prototype.attr0 = '0'  // Não faça

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  }, 
  status() {
    return `${this.velAtual} KM/h de ${this.velMax} KM/h`
  }
}

const Ferrari = {
  modelo: 'F40',
  velMax: 324  // shadowing
}

const Volvo = {
  modelo: 'V40',
  status() {  // shadowing
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(Ferrari, carro)
Object.setPrototypeOf(Volvo, carro)

console.log(Ferrari)
console.log(Volvo)

Volvo.acelerarMais(100)
console.log(Volvo.status())

Ferrari.acelerarMais(300)
console.log(Ferrari.status())
