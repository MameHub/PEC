/**
 * 
 */
class HeroeEstelar extends Pasajero {

    #natulareza;
    tipoNatulareza = ["humano","no humano"];

    // constructor(natulareza) {
    //     this.nombre = super.nombre;
    //     this.natulareza = natulareza;
    // }

    toString() {

    }

    get natulareza() {
        return this.#natulareza;
    }

    set natulareza(natulareza) {
        if (typeof natulareza === "string" && HeroeEstelar.tipoNatulareza(natulareza)) {
            this.#natulareza = natulareza;
        } else {
            throw new Error("La naturaleza introducida no es válida, solo puede ser humano o no humano.");
        }
    }

}