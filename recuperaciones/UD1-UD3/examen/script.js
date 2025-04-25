/**
 * @author Álvaro Cañas
 */

// import { Animal } from "./animal.js";
import { AnimalSalvaje } from "./animalSalvaje.js";
import { AnimalDomestico } from "./animalDomestico.js";
// import { Habitat } from "./habitat.js";
// import { archivoZoologico } from "./archivoZoologico.js";

// 2 animales.
const animalSalvaje = new AnimalSalvaje("Perico", "Canguro", 2, 90, "patadón", 60);         // Animal salvaje
console.log(animalSalvaje.descripcion());

const animalDomestico = new AnimalDomestico("Federico", "Iguana", 4, 50, 10, true);      // Animal doméstico.
console.log(animalDomestico.descripcion());

// 2 habitats


// Métodos de archivoZoologico

