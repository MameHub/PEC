/**
 * @author Álvaro Cañas
 */

export class Animal {

    // Atributos
    #nombre;
    #especie;
    #patas;
    #nivelFuerza;

    // Constructor
    constructor(nombre, especie, patas, nivelFuerza) {
        this.nombre = nombre;
        this.especie = especie;
        this.patas = patas;
        this.nivelFuerza = nivelFuerza;
    }

    // Getters & Setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (nombre.length < 3) {
            console.log("El nombre debe contener mínimo 3 caracteres.");
        } else {
            this.#nombre = nombre;
        }
    }

    get especie() {
        return this.#especie;
    }

    set especie(especie) {
        if (!typeof(especie) == String) {
            console.log("La especie debe de ser un texto.");
        } else {
            this.#especie = especie;
        }
    }

    get patas() {
        return this.#patas;
    }

    set patas(patas) {
        if (patas < 2) {
            console.log("El animal no puede tener menos de dos patas.");
        } else {
            this.#patas = patas;
        }
    }

    get nivelFuerza() {
        return this.#nivelFuerza;
    }

    set nivelFuerza(nivelFuerza) {
        if (nivelFuerza < 0 && nivelFuerza > 100) {
            console.log("El nivel de fuerza no puede superar los 100.");
        } else {
            this.#nivelFuerza = nivelFuerza;
        }
    }

    // ToString()
    descripcion() {
        return `El animal ${this.nombre} es de la especie ${this.especie}, tiene ${this.patas} patas y un nivel de fuerza de ${this.nivelFuerza}.`;
    }

}