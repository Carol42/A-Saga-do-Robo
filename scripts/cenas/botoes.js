class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto
    this.x = x
    this.y = y
    
    this.botao = createButton(this.texto)
    this.proximoEstado = 'jogo'
  }
  
  draw() {
    this.botao.position(this.x, this.y)
    this.botao.center('horizontal')
    this.botao.addClass('botao-tela-inicial')
    
  }
  
  alteraCenaJogo() {
    this.botao.remove()
    botaoHistoria.botao.remove()
    botaoCreditos.botao.remove()
    cenaAtual = 'jogo'
  }
  alteraCenaHistoria() {
    this.botao.remove()
    botaoIniciar.botao.remove()
    botaoCreditos.botao.remove()
    cenaAtual = 'historia'
  }
  alteraCenaCreditos() {
    this.botao.remove()
    botaoHistoria.botao.remove()
    botaoIniciar.botao.remove()
    cenaAtual = 'creditos'
  }
  alteraCenaVoltar() {
    this.botao.remove()
    cenaAtual = 'telaInicial'
   
  }
}