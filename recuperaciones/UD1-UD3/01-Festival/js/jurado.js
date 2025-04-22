import { Participante } from "./participante.js";

export class Jurado extends Participante {

    // Atributos privados
    #profesion;
    #genero;

    // Constructor
    constructor(nombre, edad, profesion, genero) {
        super(nombre, edad);
        this.profesion = profesion;
        this.genero = genero;
    }

    // Getters & Setters
    get profesion() {
        return this.#profesion;
    }

    set profesion(profesion) {
        if (profesion.length < 5) {
            console.log("La profesión debe de contener más de 5 carácteres.");
        } else {
            this.#profesion = profesion;
        }
    }

    get genero() {
        return this.#genero;
    }

    set genero(genero) {
        const generos = ["h", "m", "l", "g", "t", "b", "i", "q", "a", "+"];
        if (!generos.includes(genero)) {
            console.log("El género introducido no es válido.");
        } else {
            this.#genero = genero;
        }
    }

    // Devolvemos el contenido del objeto creado mediante la clase como un texto.
    toString() {
        return `El nombre del jurado es ${this.nombre}, la edad es de ${this.edad} años, su profesión es ${this.profesion} y su género es ${this.genero}`;
    }

}