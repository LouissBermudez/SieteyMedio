import Player from "./player.js";
import deck from "./deck.js";


export default class Game{
    constructor(deck){
        this.player = new Player();
        this.deck = deck;

    }

    startGame(){
        this.deck.shuffle();
        this.darCartaJugador();
        this.darCartaComputer();

    }

    darCartaJugador() {
        const carta = this.deck.generalDeck.pop();
        const contenedorImagenes = document.getElementById("barajaJugador");
        const imagen = document.createElement("img")
        this.player.puntosPlayer += carta.valor;
        imagen.src = carta.img;
        contenedorImagenes.appendChild(imagen);
        this.deck.player_array.push(carta)
        console.log(this.player.puntosPlayer);

    }
    darCartaComputer() {
        const carta = this.deck.generalDeck.pop();
        const contenedorImagenes = document.getElementById("barajaComputer");
        const imagen = document.createElement("img")
        this.player.puntosComputer += carta.valor;
        imagen.src = carta.img;
        contenedorImagenes.appendChild(imagen);
        this.deck.computer_array.push(carta)
        console.log(this.player.puntosComputer)
    }
    WinnerWinnerChickenDinner() {
        if (this.player.puntosPlayer > 7.5) {
            alert("T'has pasat, guanya Computer")
        } else if (this.player.puntosPlayer === 7.5) {
            alert("Has Guanyat")
        } else if (this.player.puntosComputer === 7.5) {
            alert("Computer ha guanyat");
        } else if (this.player.puntosComputer > 7.5) {
            alert("Has Guanyat");


            /* else if(this.player.puntosPlayer < 7.5 && this.player.puntosPlayer < this.player.puntosComputer){
             alert("Computer ha guanyat");
                  }else if(this.player.puntosPlayer < 7.5 && this.player.puntosPlayer > this.player.puntosComputer){
             alert("Has Ganyat")
                  }*/
        }
    }

}