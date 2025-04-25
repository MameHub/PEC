/**
 * @author Álvaro Cañas
 */

import { Animal } from "./animal.js";

export class AnimalSalvaje extends Animal {

    // Atributos
    #tipoAtaque;
    #nivelAgresividad;

    // Constructor
    constructor(nombre, especie, patas, nivelFuerza, tipoAtaque, nivelAgresividad) {
        super(nombre, especie, patas, nivelFuerza);
        this.tipoAtaque = tipoAtaque;
        this.nivelAgresividad = nivelAgresividad;
    }

    // Getters & Setters
    get tipoAtaque() {
        return this.#tipoAtaque;
    }

    set tipoAtaque(tipoAtaque) {
        if (!typeof(tipoAtaque) == String) {
            console.log("El tipo de ataque debe de ser un texto.");
        } else {
            this.#tipoAtaque = tipoAtaque;
        }
    }

    get nivelAgresividad() {
        return this.#nivelAgresividad;
    }

    set nivelAgresividad(nivelAgresividad) {
        if (nivelAgresividad > this.nivelFuerza) {
            console.log("El nivel de agresividad no puede ser superior al nivel de fuerza.");
        } else {
            this.#nivelAgresividad = nivelAgresividad;
        }
    }

    // ToString()
    descripcion() {
        return `${super.descripcion()} Su tipo de ataque es ${this.tipoAtaque} y su nivel de agresividad es de ${this.nivelAgresividad}.`;
    }

}