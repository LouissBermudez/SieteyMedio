import Card from "./card.js";
export default class Deck {
    static deckisFull = false;
    constructor() {
        this.generalDeck = [];
        this.player_array = [];
        this.computer_array = [];
        console.log(this.generalDeck)
    }

    //función para crear el mazo de cartas
    createDeck() {
        Deck.deckisFull = true;
        for (let suit of Card.suits) {
            for (let number of Card.numbers) {
                let value = number;
                if (number === 10 || number === 11 || number === 12) {
                    value = 0.5;
                }
                const image = `./imagenes/cartas/${number}_de_${suit}.png`;
                const carta = new Card(image, number, suit, value);
                this.generalDeck.push(carta);
            }


        }


    }

    darCartaJugador() {
        const carta = this.generalDeck.pop();
        this.player_array.push(carta)
        console.log(this.player_array)
    }

    darCartaComputer() {
        const carta = this.generalDeck.pop();
        this.computer_array.push(carta)
        console.log(this.computer_array)
    }

    shuffle() {
        // obtener un índice aleatorio y intercambiar la carta en esa posición
        for (let i = this.generalDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.generalDeck[i], this.generalDeck[j]] = [this.generalDeck[j], this.generalDeck[i]];
        }


    }
    borrarDeck(){
           location.reload();

    }
}