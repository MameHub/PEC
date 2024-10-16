// Fromas de declarar un array, dimensión y acceso al array.

// Forma tradicional (desuso).
const nombre = new Array(6); // Vacío con 6 elementos.
const provincias = new Array('Córdoba','Sevilla');

// Forma más común.
const numeros = [1,2,3,4];
const letras = []; // Array vacío.
// console.log(nombre.length);
nombre[nombre.length]="hola"; // Crecer mi array.
console.log(nombre[6]);
console.log(numeros);
console.table(numeros);