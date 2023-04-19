import Deck from "./Deck.js";
import Game from "./Game.js"


let deck = new Deck();
const juego = new Game(deck);
const nextPlayerButton = document.getElementById('stand');
nextPlayerButton.addEventListener('click', () => {
    // llamar a la función stand() para cambiar de jugador
    juego.stand();
});


//crear mazo general
//instaciamos la clase "deck"
window.addEventListener("load", ()=> {
    deck.createDeck();
})










//dar carta al jugador, quitandola del array general
/* inicializar.darCartaJugador();
inicializar.darCartaComputer();
*/

