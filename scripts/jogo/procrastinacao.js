class Procrastinacao {
  constructor(total, inicial) {
    this.total = total
    this.inicial = inicial
    this.pontos = this.inicial
    this.largura = 20
    this.altura = 20
    this.xInicial = width - 150
    this.y = 20
  }
  

  
  exibe(){
    textAlign(RIGHT)
    fill('#fff')
    textSize(20)
    text('Procrastinação ', width - 160, 38)
    textFont(fonteTelaInicial)
  }
  
  draw(){
    for(let i = 0; i < this.total; i++){
       const margem = i * 10
       const posicao = this.xInicial * (i + 1)
       image(barrinha, posicao + margem, this.y, this.largura, this.altura)
    }
  }
  
  addBarrinha(){
    if(this.pontos == 1){
    image(barrinha, width - 140, this.y, this.largura, this.altura)
  }
     if(this.pontos == 2){
    image(barrinha, width - 140, this.y, this.largura, this.altura)
        image(barrinha, width - 120, this.y, this.largura, this.altura)
  }
   if(this.pontos == 3){
    image(barrinha, width - 140, this.y, this.largura, this.altura)
     image(barrinha, width - 120, this.y, this.largura, this.altura)
     image(barrinha, width - 100, this.y, this.largura, this.altura)
  }
   if(this.pontos == 4){
    image(barrinha, width - 140, this.y, this.largura, this.altura)
     image(barrinha, width - 120, this.y, this.largura, this.altura)
     image(barrinha, width - 100, this.y, this.largura, this.altura)
      image(barrinha, width - 80, this.y, this.largura, this.altura)
  }
   if(this.pontos == 5){
    image(barrinha, width - 140, this.y, this.largura, this.altura)
     image(barrinha, width - 120, this.y, this.largura, this.altura)
     image(barrinha, width - 100, this.y, this.largura, this.altura)
      image(barrinha, width - 80, this.y, this.largura, this.altura)
     image(barrinha, width - 60, this.y, this.largura, this.altura)
  }
}
  
    
  addPonto(){
   if(this.pontos < this.total){
    this.pontos++
    }    
  }
  diminuiPonto(){
    this.pontos--
  }
}