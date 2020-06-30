class Historia {
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
    
    text('Tilipe Deschamps (Michel Teló nas horas vagas) é um cara legal\ncuja paixão é fazer as pessoas se apaixonarem por programação.\nO que ele não esperava era que um de seus maiores projetos\ndivulgados com esse propósito acabaria por chamar atenção das\npessoas, digo, máquinas erradas. O tal projeto era composto por\n4 robôs que criavam e postavam vídeos para o youtube. Em um\nmomento de guerra entre humanos e máquinas, isso se tornaria\numa ótima fonte de dados sobre a mente humana e uma vantagem\npoderosíssima para as máquinas. E foi o que aconteceu. Tilipe\nteve seus robôs roubados. Agora ele precisa sair em uma\naventura pelo perigoso Reino das Máquinas para recuperá-los.\nPorém esse reino é extremamente perverso. As máquinas sabem\ncomo fazer humanos se distraírem facilmente e se desligarem\ndos seus objetivos. Durante todo o percurso nosso heroi será\ntentado pelas redes sociais e por memes de passarinho. O que\nele precisa fazer é evitar ao máximo essas armadilhas e não\ndeixar que sua barrinha de procrastinação se encha\ncompletamente, ou isso significará vitória para as máquinas.\nPorém, ao encontrar-se com a Miki, o seu foco aumentará um\npouco, então procure os doguinhos! Durante sua aventura, Tilipe\nencontrará também alguns amigos. Aliar-se a eles ou não (e\ntambém dependendo da sua procrastinação no momento) pode mudar\ncompletamente o rumo da história. Esses amigos serão: Paulo,\nGuilherme, Juliana, Leon e Nilce.\nCOMO JOGAR: Utilize as setas do teclado para mover o personagem\n(para frente, para trás e pular) ', 20, 60);
    
    textFont('Georgia')
  }

   _botaoVoltar() {
    botaoVoltar.y = height / 8 * 6
    botaoVoltar.draw()

  }
}