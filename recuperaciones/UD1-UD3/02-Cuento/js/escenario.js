// Creamos la clase "Escenaro" de forma que se pueda exportar para utilizar en otro archivo o puedan heredarla.
export class Escenario {

    // Atributos privados
    #nombre;
    #ubicacion;
    #clima;

    // Constructor
    constructor(nombre, ubicacion, clima) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.clima = clima;
    }

    // Getter and Setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (nombre.length < 3) {
            throw new Error("El nombre del escenario debe contener al menos 3 carácteres.");
        } else {
            this.#nombre = nombre;
        }
    }

    get ubicacion() {
        return this.#ubicacion;
    }

    set ubicacion(ubicacion) {
        if (ubicacion.length === 0) {
            throw new Error("El nombre de la ubicación no puede estar vacío.");
        } else {
            this.#ubicacion = ubicacion;
        }
    }

    get clima() {
        return this.#clima;
    }

//Describe el clima, almacenado con la primera letra en mayúscula y el resto en minúsculas.
    set clima(clima) {
        this.#clima = clima.charAt(0) + clima;
    }

    // Obtenemos una cadena de texto con la información del objeto creado.
    toString() {
        return `Nombre: ${this.nombre}, Ubicación: ${this.ubicacion}, Clima: ${this.clima}`;
    }

}