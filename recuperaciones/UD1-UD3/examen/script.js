/**
 * @author Álvaro Cañas
 */

// import { Animal } from "./animal.js";
import { AnimalSalvaje } from "./animalSalvaje.js";
import { AnimalDomestico } from "./animalDomestico.js";
import { Habitat } from "./habitat.js";
// import { archivoZoologico } from "./archivoZoologico.js";

// 2 animales.
const animalSalvaje = new AnimalSalvaje("Perico", "Canguro", 2, 90, "patadón", 60);         // Animal salvaje
console.log(animalSalvaje.descripcion());

const animalDomestico = new AnimalDomestico("Federico", "Iguana", 4, 50, 10, true);      // Animal doméstico.
console.log(animalDomestico.descripcion());

// 2 habitats
const habitat1 = new Habitat("Selva", "Brasil", 90);
console.log(habitat1.resumen());

const habitat2 = new Habitat("Desierto", "Sahara", 40);
console.log(habitat2.resumen());

// Métodos de archivoZoologico



// Mostramos en el HTML la información
document.getElementById("output").innerHTML += "</br>";
document.getElementById("output").innerHTML += animalSalvaje.descripcion();
document.getElementById("output").innerHTML += "</br>";
document.getElementById("output").innerHTML += animalDomestico.descripcion();
document.getElementById("output").innerHTML += "</br>";
document.getElementById("output").innerHTML += habitat1.resumen();
document.getElementById("output").innerHTML += "</br>";
document.getElementById("output").innerHTML += habitat2.resumen();
document.getElementById("output").innerHTML += "</br>";