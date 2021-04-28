//https://www.youtube.com/watch?v=EUp84qlFZdA - Primeira versão
//Criação das variáveis
var tela = 1
var largura = 200
var altura = 50
var xMenu = 100
var yMenu1 = 105
var yMenu2 = 165
var yMenu3 = 225
var yVoltar = 30

//Imagens
let imgMenu;
let imgReta;
let imgOrientador;
let imgProgramador;
let imgBg;
let imgTelafinal
let imgGameover

//Música
let song;

function voltar() {
    //Seleção -> Voltar
    if(mouseX > 30 && mouseX < 70 && mouseY >
      15 && mouseY < yVoltar){
      stroke(0);
      fill(255);
      rect(30, 17, 40, 15, 15);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    //Texto Voltar
    fill(0);
    noStroke();
    text("Voltar", 50, 30);
}

function preload() {
  imgMenu = loadImage('ImagemMenu.jpg');
  imgOrientador =loadImage('Orientador.jpg')
  imgProgramador = loadImage('Programador.jpg');
  imgReta = loadImage('Reta.png');
  imgBg = loadImage('Bg.png');
  imgTelafinal = loadImage('Telafinal.png');
  imgGameover = loadImage('Gameover.png');
  song = loadSound('Lofi.mp3');
}

function keyPressed(){
  if (song.isPlaying()){
    song.stop();
  } else {
    song.play();
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  textStyle(NORMAL)
  //Tela do Menu
  if(tela == 1){
    image(imgBg,0,0);
    textSize(14);
    fill(0);
    noStroke();
    text("Aperte qualquer tecla para reproduzir ou parar a música", 200, 390);
    textAlign(CENTER);
    textSize(26);
    
    //Seleção -> jogo
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY >
      yMenu1 && mouseY < yMenu1 + altura){
      stroke(0);
      fill(255);
      rect(xMenu, yMenu1, largura, altura,15);
       if(mouseIsPressed){
        tela = 2;
      }
  }
    //Texto iniciar
    fill(0);
    noStroke();
    text("Iniciar", 200, 140);
    
    //Seleção -> Informações do jogo
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY >
      yMenu2 && mouseY < yMenu2 + altura){
      stroke(0);
      fill(255);
      rect(xMenu, yMenu2, largura, altura,15);
      if(mouseIsPressed){
        tela = 3;
      }
    }
    //Texto Informações
    fill(0);
    noStroke();
    text("Informações", 200, 200);
    
    //Seleção -> Créditos
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY >
      yMenu3 && mouseY < yMenu3 + altura){
      stroke(0);
      fill(255);
      rect(xMenu, yMenu3, largura, altura,15);
      if(mouseIsPressed){
        tela = 4;
      }
    }
    //Texto Créditos
    fill(0);
    noStroke();
    text("Créditos", 200, 260);
    
  }
  
  //Game - Questão 1
  if(tela == 2){
    image(imgReta,0,0);
    voltar()
    textSize(15);
    
    //Pergunta
    stroke(0);
    fill(255);
    rect(120, 74, 150, 15);
    fill(0);
    noStroke();
    text("Questão 1: 2*10-15=", 35, 75, 330);
    
    //Opção 1
    if(mouseX > 38 && mouseX < 60 && mouseY >
      107 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(40, 107, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 1
    fill(0);
    noStroke();
    text("-10", 50, 120);
    
    //Opção 2
    if(mouseX > 130 && mouseX < 165 && mouseY >
      180 && mouseY < 200){
      stroke(0);
      fill(255);
      rect(135, 187, 30, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 2
    fill(0);
    noStroke();
    text("-5", 150, 200);
    
    //Opção 3
    if(mouseX > 230 && mouseX < 250 && mouseY >
      105 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(230, 108, 20, 15, 15);
      if(mouseIsPressed){
        tela = 6;
      }
    }
    
    //Texto Opção 3
    fill(0);
    noStroke();
    text("5", 240, 120);
    
    //Opção 4
    if(mouseX > 330 && mouseX < 350 && mouseY >
      185 && mouseY < 205){
      stroke(0);
      fill(255);
      rect(331, 187, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 4
    fill(0);
    noStroke();
    text("10", 340, 200);
    
//Final da tela 2    
}
  
  //Tela das informações
  if(tela == 3){
    image(imgBg,0,0)
    textAlign(CENTER);
    textSize(15);
    voltar()
    //Texto das Informações
    fill(0);
    noStroke();
    text("Esse jogo trata da habilidade:(EF03MA04) Estabelecer a relação entre números naturais e pontos da reta numérica para utilizá-la na ordenação dos números naturais e também na construção de fatos da adição e da subtração, relacionando-os com deslocamentos para a direita ou para a esquerda.", 35, 125, 330);
  }
  
  //Tela dos créditos
  if(tela == 4){
    image(imgBg,0,0)
    textAlign(CENTER);
    textSize(15);
    voltar()
    //Texto da tela dos créditos
    fill(0);
    noStroke();
    text("Programador", 110, 100);
    text("João Victor de Souza Andrade", 110, 280);
    text("joaovsouz@gmail.com", 110, 300);
    text("Orientador", 300, 100);
    image(imgOrientador,225,110)
    image(imgProgramador, 35, 110, 150, 150);
}
  
  //Game - Game over
  if(tela==5){
    //Papel de parede
    image(imgGameover,0,0)
    
    //Seleção -> Tentar novamente
    if(mouseX > 240 && mouseX < 360 && mouseY >
      310 && mouseY < 320){
      stroke(0);
      fill(255);
      rect(235, 307, 130, 15, 15);
      if(mouseIsPressed){
        tela = 2;
      }
    }
    //Texto -> Tentar novamente
    fill(0);
    noStroke();
    text("Tentar novamente", 300, 320);
}
  
  //Game - Questão 2
  if(tela==6){
    image(imgReta,0,0);
    voltar()
    textSize(15);
    
    //Pergunta
    stroke(0);
    fill(255);
    rect(110, 74, 175, 15);
    fill(0);
    noStroke();
    text("Questão 2: 2+5*2-10*2=",35, 75,330);
    
    //Opção 1
    if(mouseX > 38 && mouseX < 60 && mouseY >
      180 && mouseY < 200){
      stroke(0);
      fill(255);
      rect(40, 187, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 1
    fill(0);
    noStroke();
    text("-6", 50, 200);
    
    //Opção 2
    if(mouseX > 130 && mouseX < 165 && mouseY >
      107 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(135, 107, 30, 15, 15);
      if(mouseIsPressed){
        tela = 7;
      }
    }
    
    //Texto Opção 2
    fill(0);
    noStroke();
    text("-8", 150, 120);
    
    //Opção 3
    if(mouseX > 230 && mouseX < 250 && mouseY >
      185 && mouseY < 205){
      stroke(0);
      fill(255);
      rect(230, 187, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 3
    fill(0);
    noStroke();
    text("10", 240, 200);
    
    //Opção 4
    if(mouseX > 330 && mouseX < 350 && mouseY >
      105 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(331, 108, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 4
    fill(0);
    noStroke();
    text("20", 340, 120);
    
}
  
  //Game - Questão 3
  if(tela==7){
    image(imgReta,0,0);
    voltar()
    textSize(15);
    
    //Pergunta
    stroke(0);
    fill(255);
    rect(120, 74, 155, 15);
    fill(0);
    noStroke();
    text("Questão 3: 2*-4+10:2=", 35, 75, 330);
    
    //Opção 1
    if(mouseX > 38 && mouseX < 60 && mouseY >
      107 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(40, 107, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 1
    fill(0);
    noStroke();
    text("-4", 50, 120);
    
    //Opção 2
    if(mouseX > 130 && mouseX < 165 && mouseY >
      180 && mouseY < 200){
      stroke(0);
      fill(255);
      rect(135, 187, 30, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 2
    fill(0);
    noStroke();
    text("-9", 150, 200);
    
    //Opção 3
    if(mouseX > 230 && mouseX < 250 && mouseY >
      105 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(230, 108, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 3
    fill(0);
    noStroke();
    text("2", 240, 120);
    
    //Opção 4
    if(mouseX > 330 && mouseX < 350 && mouseY >
      185 && mouseY < 205){
      stroke(0);
      fill(255);
      rect(331, 187, 20, 15, 15);
      if(mouseIsPressed){
        tela = 8;
      }
    }
    
    //Texto Opção 4
    fill(0);
    noStroke();
    text("-3", 340, 200);
  }
  
  //Game - Questão 4
  if(tela==8){
    image(imgReta,0,0);
    voltar()
    textSize(15);
    
    //Pergunta
    stroke(0);
    fill(255);
    rect(120, 74, 160, 15);
    fill(0);
    noStroke();
    text("Questão 4: 6:2-10*2=",35, 75,330);
    
    //Opção 1
    if(mouseX > 38 && mouseX < 60 && mouseY >
      180 && mouseY < 200){
      stroke(0);
      fill(255);
      rect(40, 187, 20, 15, 15);
      if(mouseIsPressed){
        tela = 9;
      }
    }
    
    //Texto Opção 1
    fill(0);
    noStroke();
    text("-17", 50, 200);
    
    //Opção 2
    if(mouseX > 130 && mouseX < 165 && mouseY >
      107 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(135, 107, 30, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 2
    fill(0);
    noStroke();
    text("-8", 150, 120);
    
    //Opção 3
    if(mouseX > 230 && mouseX < 250 && mouseY >
      185 && mouseY < 205){
      stroke(0);
      fill(255);
      rect(230, 187, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 3
    fill(0);
    noStroke();
    text("15", 240, 200);
    
    //Opção 4
    if(mouseX > 330 && mouseX < 350 && mouseY >
      105 && mouseY < 125){
      stroke(0);
      fill(255);
      rect(331, 108, 20, 15, 15);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    
    //Texto Opção 4
    fill(0);
    noStroke();
    text("8", 340, 120);
  }
  
  //Game - Tela de parabenização e agradecimento
  if(tela==9){
    image(imgTelafinal,0,0)
    if(mouseX > 260 && mouseX < 380 && mouseY >
      335 && mouseY < 355){
      stroke(0);
      fill(255);
      rect(265, 337, 110, 15, 15);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    //Texto Voltar ao menu
    fill(0);
    noStroke();
    text("Voltar ao menu", 320, 350);
  }
//Final do draw
}