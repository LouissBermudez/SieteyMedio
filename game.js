import Player from './player.js';


// eslint-disable-next-line valid-jsdoc
/**
 * @class
 * Clase para almacenar todos los metodos relacionados con la funcionalidad del juego
 */
export default class Game {
  /**
   *
   * @constructor
   * @param {Object} deck
   *
   */
  constructor(deck) {
    this.player = new Player();
    this.deck = deck;
  }


  /**
   * Método para iniciar una nueva partida
   */
  startGame() {
    this.deck.shuffle();
    this.darCartaJugador();
    this.darCartaComputer();
  }

  /**
   * Método para dar una carta a un jugador. También se implementa en este método la inserción de la imagen en la página
   */
  darCartaJugador() {
    const carta = this.deck.generalDeck.pop();
    const contenedorImagenes = document.getElementById('barajaJugador');
    const imagen = document.createElement('img');
    this.player.puntosPlayer += carta.valor;
    imagen.src = carta.img;
    contenedorImagenes.appendChild(imagen);
    this.deck.player_array.push(carta);
    console.log(this.player.puntosPlayer);
  }

  /**
   * Método para dar una carta a Computer. También se implementa en este método la inserción de la imagen en la página
   */
  darCartaComputer() {
    const carta = this.deck.generalDeck.pop();
    const contenedorImagenes = document.getElementById('barajaComputer');
    const imagen = document.createElement('img');
    this.player.puntosComputer += carta.valor;
    imagen.src = carta.img;
    contenedorImagenes.appendChild(imagen);
    this.deck.computer_array.push(carta);
    console.log(this.player.puntosComputer);
  }


  /**
   * Método para conocer el ganador del juego
   */
  winnerWinnerChickenDinner() {
    if (this.player.puntosPlayer > 7.5) {
      alert('T\'has pasat, guanya Computer');
    } else if (this.player.puntosPlayer === 7.5) {
      alert('Has Guanyat');
    } else if (this.player.puntosComputer === 7.5) {
      alert('Computer ha guanyat');
    } else if (this.player.puntosComputer > 7.5) {
      alert('Has Guanyat');
    }
  }
}
