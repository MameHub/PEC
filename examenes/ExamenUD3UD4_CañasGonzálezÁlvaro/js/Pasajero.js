/**
 * 
 */
class Pasajero {

    #nombre;

    constructor(nombre) {
        this.nombre = nombre;
    }

    toString() {
        return `El nombre del pasajero es ${this.#nombre}`;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (typeof nombre === "string" && nombre !== "" && nombre.length >= 5) {
            this.#nombre = nombre;
        } else {
            throw new Error("El nombre introducido debe contener como mínimo 5 caracteres.");
        }
    }

}