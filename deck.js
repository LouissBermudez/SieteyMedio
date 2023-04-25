import Card from './card.js';

/**
 * Clase que almacena todo lo relacionado con las cartas
 */
export default class Deck {
  // eslint-disable-next-line valid-jsdoc
  /**
   * @constructor
   * Contiene el array general de la baraja y los arrays de cada jugador
   */
  constructor() {
    this.generalDeck = [];
    this.player_array = [];
    this.computer_array = [];
    console.log(this.generalDeck);
  }


  /**
   *
   * Metodo para crear un nuevo mazo
   */
  createDeck() {
    for (const suit of Card.suits) {
      for (const number of Card.numbers) {
        let value = number;
        if (number === 10 || number === 11 || number === 12) {
          value = 0.5;
        }
        const image = `./imagenes/cartas/${suit}_${number}.jpg`;
        const carta = new Card(image, number, suit, value);
        this.generalDeck.push(carta);
      }
    }
  }


  /**
   * Método para barajear el mazo creado
   */
  shuffle() {
    // obtener un índice aleatorio y intercambiar la carta en esa posición
    for (let i = this.generalDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // eslint-disable-next-line max-len
      [this.generalDeck[i], this.generalDeck[j]] = [this.generalDeck[j], this.generalDeck[i]];
    }
  }


  /**
   * Método para borrar el mazo al recargar la página
   */
  borrarDeck() {
    location.reload();
  }
}
