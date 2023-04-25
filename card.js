/**
 * Clase para crear las distintas cartas
 */
export default class Card {
  static suits = ['oros', 'copas', 'espadas', 'bastos'];
  static numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];


  /**
   *
   * @param {String}imagen
   * @param {number}number
   * @param {String}palo
   * @param {number}valor
   */
  constructor(imagen, number, palo, valor) {
    this.img = imagen;
    this.number = number;
    this.palo = palo;
    this.valor = valor;
  }
}
