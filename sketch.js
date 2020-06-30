function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial()
  historia = new Historia()
  creditos = new Creditos()
  jogo = new Jogo()
  cenas = {
    telaInicial,
    historia,
    creditos,
    jogo
  }
  jogo.setup()
  botaoHistoria = new BotaoHistoria('História', width / 2, height / 2)
  botaoCreditos = new BotaoCreditos('Créditos', width / 2, height / 2)
  botaoIniciar = new BotaoIniciar('Iniciar', width / 2, height / 2)
  botaoVoltar = new BotaoVoltar('Voltar', width /2, height / 2)
  
  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key)
}

function keyReleased(){
  jogo.keyReleased(key)
}

function draw() {
  // if(cenaAtual === 'jogo') {
  //   jogo.draw()
  // }
  cenas[cenaAtual].draw()
}