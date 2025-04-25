/**
 * @author Álvaro Cañas
 */

export class ArchivoZoologico {

    // Atributos
    #animales;
    #habitat;

    // Constructor vacío
    constructor() {
        this.#animales = [];
        this.#habitat = [];
    }

    // Métodos
    annadirAnimal(animal) {
        for(let a of this.#animales) {
            if(a.nombre === animal.nombre) {
                return false;
            }
        }
        this.#animales.push(animal);
        return true;
    }

    annadirHabitat(habitat) {
        for(let h of this.#habitat) {
            if(h.nombre === habitat.nombre) {
                return false;
            }
        }
        this.#habitat.push(habitat);
        return true;
    }

    mostrarAnimales() {
        return this.#animales;
    }

    mostrarHabitats() {
        return this.#habitat;
    }

    resumen() {
        return ``;
    }

}