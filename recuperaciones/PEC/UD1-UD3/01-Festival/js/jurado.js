import { Participante } from "./participante.js";

export class Jurado extends Participante{

    #profesion;
    #genero;

    constructor(nombre, edad, profesion, genero) {
        super(nombre, edad);
        this.#profesion = profesion;
        this.#genero = genero;
    }

    get profesion() {
        return this.#profesion;
    }

    set profesion(profesion) {
        if(profesion.length < 5) {
            throw new Error("La profesión debe tener al menos 5 caracteres.");
        } else {
            this.#profesion = profesion;
        }
    }

    get genero() {
        return this.#genero;
    }

    set genero(genero) {
        const generosValidos = ["h", "m", "l", "g", "t", "b", "i", "q", "a", "+"];
        if (!generosValidos.inludes(genero)) {
            throw new Error("Género no válido");
        }
        else{
            this.#genero = genero;
        }
    }

    toString() {
        `${super.toString()}, Profesión: ${this.profesion}, Género: ${this.genero}`;
    }

}