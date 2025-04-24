/**
 * @author Álvaro Cañas
 */

import Jurado from "./jurado.js";

export class Festival {

    // ATRIBUTOS
    #nombre;
    #ciudad;
    #edicion;
    #descripcion;
    #aProducciones;
    #aParticipantes;

    // Método para construir el objeto.
    constructor(nombre, ciudad, edicion, descipcion) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.edicion = edicion;
        this.decripcion = descipcion;
        this.#aProducciones = [];
        this.#aParticipantes = [[], []];
    }

    // SETTERS & GETTERS
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (nombre.length < 3 || nombre == "") {
            console.log("El nombre no puede contener menos de 3 caracteres.");
        } else {
            this.#nombre = nombre;
        }
    }

    get ciudad() {
        return this.#ciudad;
    }

    set ciudad(ciudad) {
        if (ciudad = "") {
            console.log("El nombre de la ciudad no puede estar en blanco.");
        } else {
            this.#ciudad = ciudad;
        }
    }

    get edicion() {
        return this.#edicion;
    }

    set edicion(edicion) {
        if (edicion < 0) {
            console.log("El número de la edición no puede ser negativo.");
        } else {
            this.#edicion = edicion;
        }
    }

    // Métodos
    introducirProduccion(produccion) {
        for (const p of produccion) {
            if (!this.#aProducciones.includes(p)) {
                this.#aProducciones.push(p);
                return true;
            } else {
                console.log("La producción introducida ya se encontraba.");
                return false;
            }
        }
    }

    eliminarProduccion(titulo) {

    }

    annadirParticipante(participante) {
        if (participante instanceof Jurado) {
            this.#aParticipantes.push[1].participante;
        } else {
            this.#aParticipantes.push[0].participante;
        }
    }

    getProducciones() {
        return this.#aProducciones;
    }
    
    getParticipantes() {
        return this.#aParticipantes;
    }

    toString() {
        return ``;
    }

}