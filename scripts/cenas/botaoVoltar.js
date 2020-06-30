class BotaoVoltar extends BotaoGerenciador{
  constructor(texto, x, y){
    super(texto, x, y)
    
  }
    draw(){
    this.botao.position(this.x, this.y)
    this.botao.center('horizontal')
    this.botao.addClass('botao-tela-inicial')
    this.botao.mousePressed(() => this.alteraCenaVoltar())
  }
}