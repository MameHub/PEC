export class Participante {

    // Atributos privados
    #nombre;
    #edad;

    // Constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Getters & Setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (nombre.length > 10) {
            this.#nombre = nombre.lice(0, 10) + "...";
        } else {
            this.#nombre = nombre;
        }
    }

    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        if (edad < 5) {
            console.log("La edad mínima son 5 años.");
            this.#edad = 5;
        } else {
            this.#edad = edad;
        }
    }

    // Devolvemos el contenido del objeto creado mediante la clase como un texto.
    toString() {
        return `El nombre del participante es ${this.nombre} y la edad es de ${this.edad} años.`;
    }

}