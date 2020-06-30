class Jogo {
  constructor() {
  }

setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 5); 
  robo = new Robo (imagemRobo, 12000, 30, 100, 100, 150, 157)

  miki = new Miki(matrizMiki, imagemMiki, width + 1500, 30, 174, 108, 87, 54)
  leonil = new Aliados(imagemLeonil, 8000, 30, 150, 175)
  paulo = new Aliados(imagemPaulo, 1000, 30, 130, 155)
  gui = new Aliados(imagemGui, 3000, 30, 130, 155)
  ju = new Aliados(imagemJu, 5700, 30, 130, 155)
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 32, 32)
inimigo1 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 100, 100, 104, 104, 10, 500)
  insta = new Inimigo(matrizInsta, imagemInsta, 30, 30, 70, 70, 104, 104, 10, 200)
  foreground = new Foreground(imagemForeground, 7);
  procrastinacao = new Procrastinacao(5, 0)
    somDoJogo.loop()
    frameRate(20)
  
  inimigos.push(inimigo1)
  inimigos.push(insta)
}

keyPressed(){
  if(key === 'ArrowUp'){
  personagem.pula()
  somDoPulo.play()
  }
  if (key === 'ArrowRight'){
  personagem.matriz = matrizPersonagem
  personagem.andaFrente()
  footstep.play()
    cenario.velocidade = cenario.velocidade + 5
  foreground.velocidade = foreground.velocidade + 5
  }
  if (key === 'ArrowLeft'){
  personagem.matriz = matrizVoltando
  personagem.andaTrás()
  footstep.play()
  cenario.velocidade = cenario.velocidade - 5
  foreground.velocidade = foreground.velocidade - 5
  }
 
}
  
keyReleased(){
  if(key == 'ArrowLeft'){
    cenario.velocidade = cenario.velocidade + 5
  foreground.velocidade = foreground.velocidade + 5
  }
  if(key == 'ArrowRight'){
    cenario.velocidade = cenario.velocidade - 5
  foreground.velocidade = foreground.velocidade - 5
  }
  return false;
}

draw() {
  const inimigo = inimigos[this.inimigoAtual]
  cenario.exibe()
  cenario.move()
  robo.exibe()
  robo.move()
  personagem.exibe()
  personagem.aplicaGravidade()
  miki.exibe()
  miki.move()
  leonil.exibe3()
  leonil.move()
  paulo.exibe3()
  paulo.move()
  gui.exibe3()
  gui.move()
  ju.exibe3()
  ju.move()
  insta.exibe2()
  insta.move()
  inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()
    
     if(personagem.x >= width){
  personagem.x = width - 100
  }
      if(personagem.x <= 0){
  personagem.x = 1
  }
  
    
    if (personagem.estaColidindo(inimigo)) {
      if(procrastinacao.pontos < 4){
      nossa.play()
      }
      if(procrastinacao.pontos == 4 ){
      assimMeMata.play()
      }
      procrastinacao.addPonto()
      
      personagem.ficaInvencivel()
     if (procrastinacao.pontos == 5){
      image(imagemGameOver, width/2 - 200, 70)      
      noLoop()
       }  
     }
    
  })
  
  
  
  if(personagem.colide(miki)){
    bark.play()
    procrastinacao.pontos = procrastinacao.pontos - 2
    personagem.ficaInvencivel()
    
  }
  
   if(personagem.encontra(robo)){
    image(parabens, width/2 - 200, 70)      
      noLoop()
  }
  
  if(personagem.colide2(leonil)) {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(15);
    text('Você ganha alguns pontos de procrastinação por se distrair\ncom a melhor cantora tubarão\nPorém também se torna invencível por um tempo, devido aos\nensinamentos do Leon para controle do TDAH', width / 2, height / 5 * 2);
    leonil.velocidade = 0
    cenario.velocidade = 0
    foreground.velocidade = 0
    inimigo1.velocidade = 0
    insta.velocidade = 0
    robo.velocidade = 0
    miki.velocidade = 0
    paulo.velocidade = 0
    gui.velocidade = 0
    ju.velocidade = 0
  
    setTimeout(() => {
    personagem.ficaMuitoInvencivel()
    leonil.velocidade = 5
    paulo.velocidade = 5
    cenario.velocidade = 5
    miki.velocidade = 5
    robo.velocidade = 5
    foreground.velocidade = 7
    inimigo1.velocidade = 10
    insta.velocidade = 10
    gui.velocidade = 5
    ju.velocidade = 5
    }, 10000)
  }
   if(personagem.colide4(gui)) {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(15);
    text('Guilherme lhe mostra um caminho mais rápido para chegar\naté os robôs, o que te motiva e te deixa\nmais focado por mais tempo', width / 2, height / 5 * 2);
    leonil.velocidade = 0
    cenario.velocidade = 0
    foreground.velocidade = 0
    inimigo1.velocidade = 0
    insta.velocidade = 0
    robo.velocidade = 0
    miki.velocidade = 0
    paulo.velocidade = 0
    gui.velocidade = 0
    ju.velocidade = 0
  
    setTimeout(() => {
    personagem.ficaMuitoInvencivel()
    leonil.velocidade = 5
    paulo.velocidade = 5
    cenario.velocidade = 5
    miki.velocidade = 5
    robo.velocidade = 5
    foreground.velocidade = 7
    inimigo1.velocidade = 10
    insta.velocidade = 10
    gui.velocidade = 5
    ju.velocidade = 5
    }, 10000)
  }
   if(personagem.colide5(ju)) {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(15);
    text('Juliana, com seu carisma incomparável, dá-lhe um belo\npuxão de orelha e te trás de volta para a realidade', width / 2, height / 5 * 2);
    leonil.velocidade = 0
    cenario.velocidade = 0
    foreground.velocidade = 0
    inimigo1.velocidade = 0
    insta.velocidade = 0
    robo.velocidade = 0
    miki.velocidade = 0
    paulo.velocidade = 0
    gui.velocidade = 0
    ju.velocidade = 0
  
    setTimeout(() => {
    personagem.ficaMuitoInvencivel()
    leonil.velocidade = 5
    paulo.velocidade = 5
    cenario.velocidade = 5
    miki.velocidade = 5
    robo.velocidade = 5
    foreground.velocidade = 7
    inimigo1.velocidade = 10
    insta.velocidade = 10
    gui.velocidade = 5
    ju.velocidade = 5
    }, 10000)
  }
  
   if(personagem.colide3(paulo)) {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(15);
    text('A paixão de Paulo por Matrix fez com que ele fosse facilmente\nconvencido pelas máquinas para se unir a elas\nEle entregou você para as máquinas', width / 2, height / 5 * 2);
     textSize(35)
     text('Você perdeu', width / 2, height / 5 * 3);
     
    leonil.velocidade = 0
    cenario.velocidade = 0
    foreground.velocidade = 0
    inimigo1.velocidade = 0
    insta.velocidade = 0
    robo.velocidade = 0
    miki.velocidade = 0
    paulo.velocidade = 0
    gui.velocidade = 0
    ju.velocidade = 0
     noLoop()
  }

  foreground.exibe()
  foreground.move()
  procrastinacao.exibe()
  procrastinacao.addBarrinha()
}
}
