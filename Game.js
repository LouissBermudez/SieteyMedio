import player from "./Player.js";
import deck from "./Deck.js";


export default class game{
    constructor(deck){
        this.player = new player();
        this.deck = deck;
        this.computer = new player();
        this.currentPlayer = this.player;
    }

    stand(){
        if (this.currentPlayer === this.player){
            this.currentPlayer = this.computer;
        }else{
            this.currentPlayer = this.player;
        }
        this.deck.darCartaJugador();
    }
}