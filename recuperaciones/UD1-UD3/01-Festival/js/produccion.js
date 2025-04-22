/**
 * @author Álvaro Cañas
 */

export class Produccion {

    // ATRIBUTOS PRIVADOS
    #titulo;
    #nacionalidad;
    #genero;
    #anio;

    // CONSTRUCTOR
    constructor(titulo, nacionalidad, genero, anio) {
        this.titulo = titulo;
        this.nacionalidad = nacionalidad;
        this.genero = genero;
        this.anio = anio;
    }

    // GETTERS & SETTERS
    get titulo() {
        return this.#titulo;
    }

    set titulo(titulo) {
        this.#titulo = titulo;
    }

    get nacionalidad() {
        return this.#nacionalidad;
    }

    set nacionalidad(nacionalidad) {
        this.#nacionalidad = nacionalidad;
    }

}