/**
 * 
 */
class Nave{

    #nombre;
    #heroes;
    #robot;

    constructor(nombre, heroes, robot) {
        this.nombre = nombre;
        this.heroes = heroes;
        this.robot = robot;
    }

    toString() {
        return `La nave cuenta ${this.#nombre} cuenta con los heroes ${this.#heroes} y con el robot ${this.#robot}`;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if (typeof nombre === "string" && nombre !== "") {
            this.#nombre = nombre;
        } else {
            throw new Error("La nave debe de tener un nombre.");
        }
    }

    get heroes() {
        return this.#heroes;
    }

    set heroes(heroes){

    }

    get robot() {
        this.#robot;
    }

    set robot(robot) {

    }

}