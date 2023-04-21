export default class Card{


    static suits = ['Oros', 'Copas', 'Espadas', 'Bastos'];
    static numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
    constructor(imagen, number, palo, valor) {

        this.img = imagen;
        this.number = number;
        this. palo = palo;
        this.valor = valor;
        //console.log(`Se ha creado una nueva carta: ${this.number} de ${this.palo}`);

    }

}