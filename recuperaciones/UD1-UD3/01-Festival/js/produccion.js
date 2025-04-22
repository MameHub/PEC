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

    get genero() {
        return this.#genero;
    }

    set genero(genero) {
        if (condition) {
            
        } else {
            
        }
    }

    get anio() {
        return this.#anio;
    }

    set anio(anio) {
        if (anio < 1999) {
            console.log("El año no puede ser inferior a 1999.");
        } else {
            this.#anio = anio;
        }
    }

    toString() {
        return `El título de la producción es ${this.titulo}, con nacionalidad ${this.nacionalidad} del año ${this.anio} y su género es ${this.genero}.`;
    }

}