class Miki extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.velocidade = 5
  }
  
  move() {
    this.x = this.x - this.velocidade
  
  }
  
}