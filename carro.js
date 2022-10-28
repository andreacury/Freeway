let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 320]; 
let velocidadeCarros = [2, 2.5, 3.2, 1.8, 4.2, 2.3];
let comprimentoCarro = 65;
let alturaCarro = 40;

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600
    }
  }
}

function passouTodaTela (xCarros){
  return xCarros < -50
}
