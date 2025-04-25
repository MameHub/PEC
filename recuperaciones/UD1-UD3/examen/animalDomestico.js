/**
 * @author Álvaro Cañas
 */

import { Animal } from "./animal.js";

export class AnimalDomestico extends Animal {

    // Atributos
    #obediencia;
    #esCarinnoso;

    // Constructor
    constructor(nombre, especie, patas, nivelFuerza, obediencia, esCarinnoso) {
        super(nombre, especie, patas, nivelFuerza);
        this.obediencia = obediencia;
        this.esCarinnoso = esCarinnoso;
    }

    // Getters & Setters
    get obediencia() {
        return this.#obediencia;
    }

    set obediencia(obediencia) {
        if (!typeof(obediencia) == Int32Array) {
            console.log("El valor de la obediencia debe de ser un número.");
        } else {
            this.#obediencia = obediencia;
        }
    }

    get esCarinnoso() {
        if (this.#esCarinnoso === true) {
            return "si";
        } else {
            return "no";
        }
    }

    set esCarinnoso(esCarinnoso) {
        if (!typeof(esCarinnoso == Boolean)) {
            console.log("O es cariñoso o no lo es.");
        } else {
            this.#esCarinnoso = esCarinnoso;
        }
    }

    // ToString()
    descripcion() {
        return `${super.descripcion()} Es ${this.obediencia} de obediente y ${this.esCarinnoso} es cariñoso.`;
    }

}