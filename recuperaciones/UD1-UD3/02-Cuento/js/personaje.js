// Creamos la clase "Personaje" de forma que se pueda exportar para utilizar en otro archivo o puedan heredarla.
export class Personaje {

    // Atributos privados
    #nombre;
    #tipo;
    #edad;

    // Constructor
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }

    // Getter and Setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if(nombre.length < 10) {
            nombre = nombre + "...";
        }
        this.#nombre = nombre;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(tipo) {
        const tipos = ["Clavate", "Yuko", "Selki", "Lilty"];
        if (!tipos.includes(tipo)) {
            throw new Error("El tipo introducido no es válido.");
        } else {
            this.#tipo = tipo;
        }
    }

    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        if (edad < 5) {
            edad = 5;
        }
        this.#edad = edad;
    }

    // Obtenemos una cadena de texto con la información del objeto creado.
    toString() {
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Edad: ${this.edad}`;
    }

}