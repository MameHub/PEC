"use strict"
//HERENCIA
class Electro{
    Constructor(nom, precio, color) {
        this.precio = precio;
        this.color = color;
        this.nom = nom;
    }
    // Métodos fuera del constructor
    toString(){
        return `El electrodoméstrico es ${this.nombre}, el precio es ${this.precio} € y el color ${this.color}`;
    }
}


// Instanciar un objeto
const horno = new Electro("Horno", 300, "Rosa");
console.log(horno.toString());

// Implementar herencia
class DispositivoElec extends Electro{
    // Creamos el constructor
    constructor(nom, precio, color, disco, ram) {
        super(nom, precio, color) // Invocamos al constructor de la clase base
        this.disco = disco;
        this.ram = ram;
    }
    toString(){
        return `${super.toString()} El disco duro es de ${this.disco} y la memoria RAM es de ${ram}`;
    }
}
// Instanciamos un objeto
const portatil = new DispositivoElec("HP", 600, "blanco", "1 TB", "16 GB");
console.log(portatil.toString());