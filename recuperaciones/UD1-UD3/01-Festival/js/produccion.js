export class Produccion {

    #titulo;
    #nacionalidad;
    #genero;
    #anno;

    constructor(titulo, nacionalidad, genero, anno) {
        this.titulo = titulo;
        this.nacionalidad = nacionalidad;
        this.genero = genero;
        this.anno = anno;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(titulo) {
        this.#titulo = titulo;
    }

    get nacionalidad() {
        return this.#nacionalidad;
    }

    set nacionalidad(nacionalidad) {
        this.#nacionalidad = nacionalidad;
    }
    
    get genero() {
        return this.#genero;
    }

    set genero(genero) {
        this.#genero = genero.charAt(0).toUpperCase() + genero.slice(1).toLowerCase();
    }
    
    get anno() {
        return this.#anno;
    }

    set anno(anno) {
        if(anno < 1999) {
            throw new Error("El año no puede ser inferior a 1999.");
        } else {
            this.#anno = anno;
        }
    }

    toString() {
        return `Título: ${this.titulo}, Nacionalidad: ${this.nacionalidad}, Género: ${this.genero}, Año: ${this.anno}`;
    }

}