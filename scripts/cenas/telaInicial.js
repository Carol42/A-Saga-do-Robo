class TelaInicial {
  constructor() {
    this.x = width / 2;
    this.y = height
  }

  draw() {
    this._fundo()
    this._texto()
    this._botaoJogo()
    this._botaoHistoria()
    this._botaoCreditos()
  }
  
  _fundo() {
      image(imagemTelaInicial, 0, 0, width, height)
      image(inicioForeground, 0, 0, width, height)
      
  }
  
  _texto() {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(40);
    textFont(fonteTelaInicial);
    text('Em busca do ', width / 2, height / 5);
    textSize(60);
    text('Robô Perdido', width / 2, height / 5 * 2);
    textFont('Georgia')
  }
  
  _botaoJogo() {
    botaoIniciar.y = height / 8 * 4
    botaoIniciar.draw()
  }
  
  _botaoHistoria() {
    botaoHistoria.y = height / 8 * 5
    botaoHistoria.draw()

  }

  _botaoCreditos() {
    botaoCreditos.y = height / 8 * 6
    botaoCreditos.draw()
   
  }
}