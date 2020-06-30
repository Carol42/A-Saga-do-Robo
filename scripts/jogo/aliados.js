class Aliados{
  constructor(imagem, x, variacaoY, largura, altura) {
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.velocidade = 9
   
  }
  
   exibe3(){
  image(this.imagem, this.x, this.y, this.largura, this.altura);    
  } 
  
  move() {
    this.x = this.x - this.velocidade
  
  }
  
}