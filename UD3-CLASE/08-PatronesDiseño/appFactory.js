"use strict"    // Nos obliga a definir las variables.
// Patrón de diseño Factory

class Enemigo {
    constructor(nombre, puntosVida) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
    }
    atacar(){
        console.log(`${this.nombre} está atacando!`);
    }
}

class EnemigoFactory {
    crearEnemigo(tipo){
        switch(tipo){
            case "Zombie":
                return new Enemigo("Zombie",100);
            case "Esqueleto":
                return new Enemigo("Esqueleto",75);
            case "Demonio":
                return new Enemigo("Demonio",200);
            default:
                throw new Error("Tipo de enemigo desconocido.");
        }
    }
}

const fabrica = new EnemigoFactory();
const z = fabrica.crearEnemigo("Zombie");
const e = fabrica.crearEnemigo("Esqueleto");
const d = fabrica.crearEnemigo("Demonio");

z.atacar();
e.atacar();
d.atacar();