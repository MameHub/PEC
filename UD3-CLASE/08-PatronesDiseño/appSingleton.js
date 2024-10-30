"use strict"

// Patrón de diseño Singleton: Se utiliza para asegurarnos que una clase solo tenga una instacia y proporcionar un punto de acceso global a esta instancia.

class Unica { // Comunmente se llama Singleton
    constructor(nombre){
        // console.log(Unica.instancia);
        if (Unica.instancia) { // Si ya tengo una isntancia la devuelvo.
            return Unica.instancia;
        }
        this.nombre = nombre;
        Unica.instancia = this; // Variable bandera para comprobar que la clase se ha inicializado
    }
}
const instancia1 = new Unica('a');
console.log("Entre una isntancia y otra");
const instancia2 = new Unica('b');
console.log(instancia1);
console.log(instancia2);
console.log(instancia1 === instancia2); // Las dos son la misma, con la misma dirección de memoria, etc...