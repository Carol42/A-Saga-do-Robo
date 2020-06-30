const largura = 5121

class Foreground{
  constructor(imagem, velocidade){
    this.imagem = imagem
    this.velocidade = velocidade
    this.x1 = 0
    this.x2 = imgLargura
  }
  
  exibe(){
    image(this.imagem, this.x1, 0, 0, height)
    image(this.imagem, this.x2, 0, 0, height)
  }
  
  move(){
    this.x1 = this.x1 - this.velocidade
    this.x2 = this.x2 - this.velocidade
    
    if(this.x1 < -imgLargura){
      this.x1 = imgLargura
    }
    
    if(this.x2 < -imgLargura){
      this.x2 = imgLargura
    }
  }
}