const pessoa = {
    saudacao: 'Bom dia',
    falar () {
      console.log(this.saudacao)
    }
  }
  
  pessoa.falar()
  const falar = pessoa.falar
  falar()  // conflito entre paradigmas: funcional e OO
  
  // bind você passa um objeto para ser resolvido 
  
  const falarDePessoa = pessoa.falar.bind(pessoa)
  falarDePessoa()
  