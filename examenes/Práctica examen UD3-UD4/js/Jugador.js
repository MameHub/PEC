/**
 * Clase partido donde se almacenan los datos de los jugadores, estos son sus nombres y edad.
 */
class Jugador {

    #nombre;
    #edad;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    toString() {
        return `El jugador se llama ${this.#nombre} y tiene ${this.#edad} años.`;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    set nombre(nombre) {
        if (String(nombre.lenght()) <= 3 && String(nombre.lenght()) >= 50) {
            this.#nombre = nombre;            
        } else
            return "El nombre introducido del jugador debe de tener una longitud entre 3 y 50 caracteres.";
    }

    set edad(edad) {
        if (edad > 10 && edad < 60) {
            this.#edad = edad;
        } else
            return "El jugador debe de tener una edad de entre 10 y 60 años.";
    }

}