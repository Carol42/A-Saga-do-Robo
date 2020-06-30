class Creditos {
  constructor() {
    this.x = width / 2;
    this.y = height
  }

  draw() {
    this._fundo()
    this._texto()
   // this._botaoVoltar()
  }
  
  _fundo() {
      image(imagemHistoria, 0, 0, width, height)
  }
  
  _texto() {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(LEFT);
    textSize(16);
    textFont(fonteTelaInicial);
    
    text('Esse jogo foi desenvolvido por Caroline Heloíse de Oliveira\ndurante a Imersão Game Dev da Alura Cursos Online, ministrada\npelos instrutores Juliana Negreiros, Guilherme Lima e pelo CEO\ne eterno aluno Paulo Silveira (todos participando como\npersonagens na história)\nO personagem principal (e todas as referências internas)\nsão do canal do YouTube Filipe Deschamps.\nLeon e Nilce também apareceram! Eles são dos canais Coisa\nde Nerd, Cadê a Chave, República Coisa de Nerd, Financeiro e\nQuero Ouvir Podcast\nRecomendo demais todo o pessoal aqui citado e seus respectivos\ncanais, assim como a plataforma da Alura (que\ntambém tem canal no YouTube!) ', 20, 60);
    
    textFont('Georgia')
  }

   _botaoVoltar() {
    botaoVoltar.y = height / 8 * 6
    botaoVoltar.draw()

  }
}