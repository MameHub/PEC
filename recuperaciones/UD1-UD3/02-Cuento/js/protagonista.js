// Importamos la clase "personaje" para extenderla en esta clase.
import { Personaje } from "./personaje";

// Creamos la clase "Protagonista" de forma que se pueda exportar para utilizar en otro archivo o puedan heredarla.
export class Protagonista extends Personaje {

    // Atributos privados
    #cualidad;

    // Constructor
    constructor(nombre, tipo, edad, cualidad) {
        super(nombre, tipo, edad);
        this.cualidad = cualidad;
    }

    // Getter and Setters
    get cualidad() {
        return this.#cualidad;
    }

    set cualidad(cualidad) {
        // furia, frenesi, altoRendimiento, kimura
    }

    // Obtenemos una cadena de texto con la información del objeto creado.
    toString() {
        return `${super.toString()}, cualidad: ${this.cualidad}`;
    }

}