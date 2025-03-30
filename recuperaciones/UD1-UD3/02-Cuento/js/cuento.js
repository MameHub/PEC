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
        this.#aEscenarios = [];
        this.#aPersonajes = [[],[]];
    }

    // Getter and Setters
    get titulo() {
        return this.#titulo;
    }

    set titulo(titulo) {
        
    }

    get autor() {
        return this.#autor;
    }

    set autor(autor) {

    }

    get moraleja() {
        return this.#moraleja;
    }

    set moraleja(moraleja) {

    }

    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(descripcion) {

    }

    introducirEscenario(escenario) {
        
    }

    eliminarEscenario(escenario) {

    }

    annadirPersonaje() {
        
    }

    // Obtenemos una cadena de texto con la información del objeto creado.
    toString() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Moraleja: ${this.moraleja}, Descripción ${this.descripcion}`;
    }

}