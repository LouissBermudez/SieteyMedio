import player from "./player.js";
import deck from "./deck.js";


export default class Game{
    constructor(deck){
        this.player = new player();
        this.deck = deck;

    }

    startGame(){
        this.deck.shuffle();
        this.deck.darCartaJugador();
        this.deck.darCartaComputer();

    }



    WinnerWinnerChickenDinner(){
        const deck = new Deck;
        if (deck.puntosPlayer < 0 || deck.puntosPlayer < 8){

        }
    }






 /*   stand(){
        if (this.currentPlayer === this.player){
            this.currentPlayer = this.computer;
            this.deck.darCartaComputer();
        }


    }*/










}