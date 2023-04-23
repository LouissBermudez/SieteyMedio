import Deck from "./deck.js";
import Game from "./game.js"
import Card from "./card.js";



//instaciamos la clase "Deck" y la calse "Game"
let deck = new Deck();
const juego = new Game(deck);
const imagenCarta = new Card();



export function darCarta(){
    const hitButton = document.getElementById("hitcarta")
    hitButton.addEventListener('click',() =>{

        deck.darCartaJugador();


    });
}



export function siguienteJugador(){
    const nextPlayerButton = document.getElementById('stand');
    nextPlayerButton.addEventListener('click', (event) => {
        if (event.target === nextPlayerButton) {
            // llamar a la función stand() para cambiar de jugador
            deck.darCartaComputer();
        }
    });
}
/*export function siguienteJugador(){
    const nextPlayerButton = document.getElementById('stand');
    nextPlayerButton.addEventListener('click', () => {
        // llamar a la función stand() para cambiar de jugador
        juego.stand();
    });
}*/
export function comenzarJuego(){
    const contenedorImagenes = document.getElementById("imagenCartas");
    const startGameButton = document.getElementById('start')
        startGameButton.addEventListener('click', () => {


            deck.createDeck();
            juego.startGame();
            ocultarBoton();

        });



}


export function volveraJugar(){
    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', () =>{
        deck.borrarDeck();

    });
}








function ocultarBoton(){
    document.getElementById("start").style.display = "none";
}











/*
const prueba = document.getElementById("prueba")
prueba.addEventListener('click', () =>{
    deck.darCartaComputer();

});*/
