class Pokemon {

    #nombre;
    #tipo;

    static tiposPermitidos = ["Agua", "Planta", "Fuego", "Eléctrico"];

    constructor(nombre, tipo) {
        this.#nombre = nombre;
        this.#tipo = tipo;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (typeof nombre === "string" && nombre.length >= 3 && nombre.length <= 50) {
            this.#nombre = nombre;
        } else {
            throw new Error("El nombre debe de tener entre 3 y 50 caracteres.");
        }
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(tipo) {
        if (typeof tipo === "string" && Pokemon.tiposPermitidos.includes(tipo)) {
            this.#tipo = tipo;
        } else {
            throw new Error("El tipo debe ser uno de los mostrados.");
        }
    }

    toString() {
        return `El pokemón ${this.#nombre} es de tipo ${this.#tipo}`;
    }

}