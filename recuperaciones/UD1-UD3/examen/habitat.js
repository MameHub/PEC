/**
 * @author Álvaro Cañas
 */

export class Habitat {

    // Atributos
    #nombre;
    #ubicacion;
    #nivelPeligro;

    // Constructor
    constructor(nombre, ubicacion, nivelPeligro) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.nivelPeligro = nivelPeligro;
    }

    // Getters & Setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (nombre.length < 4) {
            this.#nombre = nombre + "ZZZ";
        } else {
            this.#nombre = nombre;
        }
    }

    get ubicacion() {
        return this.#ubicacion;
    }

    set ubicacion(ubicacion) {
        if (!typeof(ubicacion) == String) {
            console.log("La ubicación debe de ser un texto.");
        } else {
            this.#ubicacion = ubicacion;
        }
    }

    get nivelPeligro() {
        return this.#nivelPeligro;
    }

    set nivelPeligro(nivelPeligro) {
        if (!typeof(nivelPeligro) == Int32Array) {
            console.log("El nivel de peligro debe de ser un número.");
        } else {
            this.#nivelPeligro = nivelPeligro;
        }
    }

    // ToString()
    resumen() {
        return `El hábitat es ${this.nombre}, esta ubicado en ${this.ubicacion} y su nivel de peligro es de ${this.nivelPeligro}.`;
    }


}