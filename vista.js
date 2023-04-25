import Deck from './deck.js';
import Game from './game.js';


const deck = new Deck();
const juego = new Game(deck);


/**
 * Método el cual llama a las funciones "darCataJugador" y "winnerWinnerChickenDinner" al clicar el botón "hit"
 */
export function darCarta() {
  const hitButton = document.getElementById('hitcarta');
  hitButton.addEventListener('click', () => {
    juego.darCartaJugador();
    juego.winnerWinnerChickenDinner();
  });
}


/**
 * Método para dar carta a Computer, llamar al metodo "winner" y ocultar el botón "stand"
 */
export function siguienteJugador() {
  const nextPlayerButton = document.getElementById('stand');
  nextPlayerButton.addEventListener('click', (event) => {
    if (event.target === nextPlayerButton) {
      juego.darCartaComputer();
      juego.winnerWinnerChickenDinner();
      ocultarBotonStand();
    }
  });
}


/**
 * Método para empezar el juego al clicar el botón "startGameButton"
 */
export function comenzarJuego() {
  const startGameButton = document.getElementById('start');
  startGameButton.addEventListener('click', () => {
    deck.createDeck();
    juego.startGame();
    ocultarBotonStart();
  });
}


/**
 * Método para resetear el juego al dar click en el botón "restart"
 */
export function volveraJugar() {
  const restartButton = document.getElementById('restart');
  restartButton.addEventListener('click', () =>{
    deck.borrarDeck();
  });
}


/**
 * Método para ocultar el botón "Start" al clicarlo
 */
function ocultarBotonStart() {
  document.getElementById('start').style.display = 'none';
}

/**
 * Método para ocultar el botón "stand" al clicarlo
 */
function ocultarBotonStand() {
  document.getElementById('hitcarta').style.display = 'none';
}


