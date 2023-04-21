import player from "./player.js";
import deck from "./deck.js";


export default class Game{
    constructor(deck){
        this.player = new player();
        this.deck = deck;
        this.computer = new player();
        this.currentPlayer = this.player;
    }

    startGame(){
        this.deck.shuffle();

        this.deck.darCartaComputer();
        this.deck.darCartaJugador();
    }


    stand(){
        if (this.currentPlayer === this.player){
            this.currentPlayer = this.computer;
            this.deck.darCartaComputer();
        }else{
            this.currentPlayer = this.player;
            this.deck.darCartaJugador();

        }

    }








}