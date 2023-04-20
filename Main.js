import Deck from "./Deck.js";
import Game from "./Game.js"



//crear mazo general
//instaciamos la clase "deck"
let deck = new Deck();
const juego = new Game(deck);

const nextPlayerButton = document.getElementById('stand');
nextPlayerButton.addEventListener('click', () => {
    // llamar a la función stand() para cambiar de jugador
    juego.stand();
});




const startGameButton = document.getElementById('start')
startGameButton.addEventListener('click', () => {
    // llamar a la función stand() para cambiar de jugador
    deck.borrarDeck();
    deck.createDeck();
    juego.startGame();
});

const hitButton = document.getElementById("hitcarta")
hitButton.addEventListener('click',() =>{

    deck.darCartaJugador();

});













//dar carta al jugador, quitandola del array general
/* inicializar.darCartaJugador();
inicializar.darCartaComputer();
*/

