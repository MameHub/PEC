/**
 * Clase Partido donde se almacenan datos de los jugadores y los sets.
 */
class Partido {

    #jugadores;
    #sets;

    constructor(jugadores, sets) {
        this.jugadores = jugadores;
        this.sets = sets;
    }

    toStrig() {
        return `El partido se debate entre ${this.#jugadores} y va ${this.#sets}`;
    }

    get jugadores() {
        return this.#jugadores;
    }

    get sets() {
        return this.#sets;
    }

    set jugadores(jugadores) {
        if (Array.isArray(jugadores) && jugadores.lenght() == 2) {
            this.#jugadores = jugadores;
        } else
            return "Tiene que introducir a los dos jugadores.";
    }

    set sets(sets) {
        if (Array.isArray(sets)) {
            this.#sets = sets
        }
    }

}