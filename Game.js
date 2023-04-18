import player from "./Player.js";
import deck from "./Deck.js";


export default class game{
    constructor(){
        this.player = player;
        this.computer = player;
        this.deck = deck;
    }
}