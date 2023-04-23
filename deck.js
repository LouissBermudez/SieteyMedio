import Card from "./card.js";
export default class Deck {
    constructor() {
        this.generalDeck = [];
        this.player_array = [];
        this.computer_array = [];
        this.puntosPlayer = 0;
        this.puntosComputer = 0;
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
                const image = `./imagenes/cartas/${suit}_${number}.jpg`;
                const carta = new Card(image, number, suit, value);
                this.generalDeck.push(carta);

            }

        }



    }








darCartaJugador() {
        const carta = this.generalDeck.pop();
        const contenedorImagenes = document.getElementById("barajaJugador");
        const imagen = document.createElement("img")
        this.puntosPlayer += carta.valor;
        imagen.src = carta.img;
        contenedorImagenes.appendChild(imagen);
        this.player_array.push(carta)
        console.log(carta.number ,this.puntosPlayer);

    }


/*PointTrack(){
        const carta = this.player_array.pop()
        let contadorPuntos = carta.value;
        contadorPuntos ++;
        if (  > 0 || carta.value < 8){

        }
}*/
darCartaComputer() {
        const carta = this.generalDeck.pop();
        const contenedorImagenes = document.getElementById("barajaComputer");
        const imagen = document.createElement("img")
        this.puntosComputer += carta.valor;
        imagen.src = carta.img;
        contenedorImagenes.appendChild(imagen);
        this.computer_array.push(carta)
        console.log(carta.number, this.puntosComputer)
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