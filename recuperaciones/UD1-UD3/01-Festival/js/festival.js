import { Jurado } from "./jurado.js";

export class Festival {

    #nombre;
    #ciudad;
    #edicion;
    #descripcion;
    #aProducciones;
    #aParticipantes;

    constructor(nombre, ciudad, edicion, descripcion) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.edicion = edicion;
        this.descripcion = descripcion;
        this.#aProducciones = [];
        this.#aParticipantes = [[],[]]; //Tiene 2 arrays
    }

    get nombre() {
        return this.#nombre;
    }
    
    set nombre(nombre) {
        if(nombre.length < 3) {
            throw new Error("El nombre del festival tiene que ser al menos de tamaño 3");
        } else {//Lo podemos quitar
            this.#nombre = nombre;
        }
    }
    
    get ciudad() {
        return this.#ciudad;
    }
    
    set ciudad(ciudad) {
        if(ciudad.length === 0) {
            throw new Error("El nombre de la ciudad no puede estar vacío");
        } else {//Lo podemos quitar
            this.#ciudad = ciudad;
        }
    }

    get edicion() {
        return this.#edicion;
    }
    
    set edicion(edicion) {
        if(edicion < 0) {
            throw new Error("La edición no puede ser un número negativo");
        } else {//Lo podemos quitar
            this.#edicion = edicion;
        }
    }

    get descripcion() {
        return this.#descripcion;
    }
    
    set descripcion(descripcion) {
        if(descripcion.length > 300) {
            throw new Error("La descripción no puede exceder de 300 caracteres");
        } else {//Lo podemos quitar
            this.#descripcion = descripcion;
        }
    }

    introducirProduccion(produccion) {
        for(let p of this.#aProducciones) {
            if(p.titulo === produccion.titulo) {
                return false;
            }
        }
        this.#aProducciones.push(produccion);//No existe, la agrego
        return true;
    }

    eliminarProduccion(titulo) {
        for(let i = 0; i < this.#aProducciones.length; i++) {
            if(this.#aProducciones[i].titulo === titulo) {
                this.#aProducciones.splice(i,1);//Elimina 1 elemento en la posición "i"
                return true;
            }
        }
        return true;
    }

    annadirParticipante(participante) {
        if(participante instanceof Jurado) {
            this.#aParticipantes[1].push(participante);
        } else {
            this.#aParticipantes[0].push(participante);
        }
    }

    getProducciones(){
        return this.#aProducciones;
    }

    getParticipante(){
        return this.#aParticipantes;
    }

    toString() {
        return `Festival: Nombre = ${this.nombre}, Ciudad = ${this.ciudad}, Edición = ${this.edicion}, Descripción = ${this.descripcion}`;
    }

}