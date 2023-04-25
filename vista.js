import Deck from "./deck.js";
import Game from "./game.js"
import Card from "./card.js";
import Player from "./player.js";


let deck = new Deck();
const juego = new Game(deck);



export function darCarta(){
    const hitButton = document.getElementById("hitcarta")
    hitButton.addEventListener('click',() =>{

        juego.darCartaJugador();
        juego.WinnerWinnerChickenDinner();

    });
}



export function siguienteJugador(){
    const nextPlayerButton = document.getElementById('stand');
    nextPlayerButton.addEventListener('click', (event) => {
        if (event.target === nextPlayerButton) {
            juego.darCartaComputer();
            juego.WinnerWinnerChickenDinner();
            ocultarBotonStand();

        }



    });
}

export function comenzarJuego(){
    const contenedorImagenes = document.getElementById("imagenCartas");
    const startGameButton = document.getElementById('start')
        startGameButton.addEventListener('click', () => {

            deck.createDeck();
            juego.startGame();
            ocultarBotonStart();

        });



}


export function volveraJugar(){
    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', () =>{
        deck.borrarDeck();

    });
}








function ocultarBotonStart(){
    document.getElementById("start").style.display = "none";

}
function ocultarBotonStand(){
    document.getElementById("hitcarta").style.display = "none";

}











/*
const prueba = document.getElementById("prueba")
prueba.addEventListener('click', () =>{
    deck.darCartaComputer();

});*/
