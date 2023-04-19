import card from "./Card.js";
export default class deck {
    constructor() {
        this.generalDeck = [];
        this.player_array = [];
        this.computer_array = [];
        console.log(this.generalDeck)
    }

    //función para crear el mazo de cartas
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
                this.generalDeck.push(carta);
            }

        }



    }
    darCartaJugador(){
        const carta = this.generalDeck.pop();
        this.player_array.push(carta)
        console.log(this.player_array)
    }
    darCartaComputer(){
        const carta = this.generalDeck.pop();
        this.computer_array.push(carta)
        console.log(this.computer_array)
    }




}