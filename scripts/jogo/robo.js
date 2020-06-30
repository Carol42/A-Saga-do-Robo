class Robo{
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.velocidade = 5
    }
exibe(){
  image(this.imagem, this.x, this.y, this.largura, this.altura, this.larguraSprite, this.alturaSprite);    
  }

  move() {
    this.x = this.x - this.velocidade
  
  }
}