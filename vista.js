import Deck from "./deck.js";
import Game from "./game.js"




//instaciamos la clase "Deck" y la calse "Game"
let deck = new Deck();
const juego = new Game(deck);

export function siguienteJugador(){
    const nextPlayerButton = document.getElementById('stand');
    nextPlayerButton.addEventListener('click', () => {
        // llamar a la función stand() para cambiar de jugador
        juego.stand();
    });
}
export function comenzarJuego(){
    const startGameButton = document.getElementById('start')


        startGameButton.addEventListener('click', () => {

            ocultarBoton();
            deck.createDeck();
            juego.startGame();

        });



}


export function volveraJugar(){
    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', () =>{
        deck.borrarDeck();

    });
}

export function darCarta(){
    const hitButton = document.getElementById("hitcarta")
    hitButton.addEventListener('click',() =>{

        deck.darCartaJugador();

    });
}





function mostrarCarta(){

}

function ocultarBoton(){
    document.getElementById("start").style.display = "none";
}