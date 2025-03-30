export class Participante {
    
    // Atributos privados.
    #nombre;
    #edad;
    
    constructor(nombre, edad) {
        this.#nombre = nombre; //esta llamada es al método SET no al atrbuto
        this.#edad = edad;
    }
    
    get nombre() {
        return this.#nombre;
    }
    
    set nombre(nombre) {
        if(nombre.length < 3) {
            nombre = nombre + "...";
        }
        this.#nombre = nombre;
    }

    get edad() {
        return this.#edad;
    }
    
    set edad(edad) {
        if(edad < 18) {
            edad = 18;
        }
        this.#edad = edad;
    }

    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}