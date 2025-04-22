// Importamos el módulo protagonista para el método "anadirPersonaje()".
import { Protagonista } from "./protagonista.js";

// Creamos la clase "Cuento" de forma que se pueda exportar para utilizar en otro archivo o puedan heredarla.
export class Cuento {

    // Atributos privados
    #titulo;
    #autor;
    #moraleja;
    #descripcion;
    #aEscenarios;
    #aPersonajes;

    // Constructor
    constructor(titulo, autor, moraleja, descripcion) {
        this.titulo = titulo;
        this.autor = autor;
        this.moraleja = moraleja;
        this.descripcion = descripcion;
        this.#aEscenarios = [];             // Array de escenarios.
        this.#aPersonajes = [[],[]];        // Array bidimensional de personajes.
    }

    // Getter and Setters
    get titulo() {
        return this.#titulo;
    }

    set titulo(titulo) {
        if (titulo.length < 3) {
            throw new Error("El título debe de tener 3 caracteres mínimo.");
        } else {
            this.#titulo = titulo;
        }
    }

    get autor() {
        return this.#autor;
    }

    set autor(autor) {
        if (autor = "") {
            throw new Error("Debe de introducir un nombre para el autor.");
        } else {
            this.#autor = autor;
        }
    }

    get moraleja() {
        return this.#moraleja;
    }

    set moraleja(moraleja) {
        if (moraleja.length > 100) {
            throw new Error("La moraleja del cuento no puede tener más de 100 caracteres.");
        } else {
            this.#moraleja = moraleja;
        }
    }

    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(descripcion) {
        if (descripcion.length > 300) {
            throw new Error("La descripción del cuento no puede exceder los 300 caracteres.");
        } else {
            this.#descripcion = descripcion;
        }
    }

    introducirEscenario(escenario) {
        for (const e of this.#aEscenarios) {
            if (e.nombre === escenario.nombre) {
                return false;
            }
        }
        this.#aEscenarios.push(escenario);
        return true;
    }

    eliminarEscenario(escenario) {
        for (let i = 0; i < this.#aEscenarios.length; i++) {
            if (this.#aEscenarios[i].nombre === escenario.nombre) {
                this.#aEscenarios.splice(i,1);
                return true;
            }
        }
        return true;
    }

    annadirPersonaje(personaje) {
        if (personaje instanceof Protagonista) {
            this.#aPersonajes[1].push(personaje);
        } else {
            this.#aPersonajes[0].push(personaje);
        }
    }

    // Obtenemos una cadena de texto con la información del objeto creado.
    toString() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Moraleja: ${this.moraleja}, Descripción: ${this.descripcion}`;
    }

}