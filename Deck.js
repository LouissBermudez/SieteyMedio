import card from "./Card.js";
export default class deck {
    constructor() {
        this.cards = [];
    console.log(this.cards)
    }

    createDeck() {
        const suits = ['Oros', 'Copas', 'Espadas', 'Bastos'];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

        for (let suit of suits) {
            for (let number of numbers) {
                let value = number;
                if (number === 10 || number === 11 || number === 12) {
                    value = 0.5;
                }
                const image = `./imagenes/cartas/${number}_de_${suit}.png`;
                const carta = new card(image, number, suit, value);
                this.cards.push(carta);
            }
        }
    }
}