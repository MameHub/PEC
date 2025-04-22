/**
 * @author Álvaro Cañas
 */

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

}