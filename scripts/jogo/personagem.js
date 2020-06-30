class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
     super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.velocidadeDoPulo = 0;
    this.gravidade = 8;
    this.alturaDoPulo = -55
    this.pulos = 0
    this.velocidadeAnda = 0 
    this.distanciaAnda = 40
    this.passos = 0
    this.invencivel = false
  }
 
  pula(){
     if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
  }
  
    aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  andaFrente(){
     this.x = this.x + this.velocidadeAnda
    this.velocidadeAnda = this.velocidadeAnda + this.gravidade
    this.velocidadeAnda = this.distanciaAnda
    
  }
  
  andaTrás(){
     this.x = this.x - this.velocidadeAnda
    this.velocidadeAnda = this.velocidadeAnda + this.gravidade
    this.velocidadeAnda = this.distanciaAnda
  
  }
  
  ficaInvencivel(){
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }
  ficaMuitoInvencivel(){
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 10000)
  }
  
    estaColidindo(inimigo) {
    if(this.invencivel){
      return false
    }
    const precisao = 0.5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    
    return colisao
  }
  
    colide(miki) {
    const precisao = 0.5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      miki.x,
      miki.y,
      miki.largura * precisao,
      miki.altura * precisao
    )
    
    return colisao
  }
   colide2(leonil) {
    const precisao = 0.5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      leonil.x,
      leonil.y,
      leonil.largura * precisao,
      leonil.altura * precisao
    )
    
    return colisao
  }
  colide3(paulo) {
    const precisao = 0.5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      paulo.x,
      paulo.y,
      paulo.largura * precisao,
      paulo.altura * precisao
    )
    
    return colisao
  }
    colide5(ju) {
    const precisao = 0.5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      ju.x,
      ju.y,
      ju.largura * precisao,
      ju.altura * precisao
    )
    
    return colisao
  }
    colide4(gui) {
    const precisao = 0.5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      gui.x,
      gui.y,
      gui.largura * precisao,
      gui.altura * precisao
    )
    
    return colisao
  }
   
   encontra(robo) {
       if(this.invencivel){
      return false
    }
    const precisao = 0.5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      robo.x,
      robo.y,
      robo.largura * precisao,
      robo.altura * precisao
    )
    
    return colisao
  }
} 