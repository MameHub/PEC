/**
 * 
 */
class Robot extends Pasajero{
    
    #puedeHablar;

    toString() {
        return `El pasajero ${this.#puedeHablar} puede hablar.`;
    }

    get puedeHablar() {
        return this.#puedeHablar;
    }

    set puedeHablar(puedeHablar) {
        if (puedeHablar === true || puedeHablar === false) {
            this.#puedeHablar = puedeHablar;
        } else
            throw new Error("El pasajero solo tiene dos opciones, o habla o no habla.");
    }

}