/*
author Álvaro Cañas
Ejercicio 6. Método map
    Dado el array const numeros = [2, 4, 6, 8, 10];:
    1. Usa map para crear un nuevo array con el triple de cada número.
    2. Usa un map para crear un array que indique el índice junto al valor, por ejemplo: "0: 2", "1: 4", etc.
    3. Usa map para añadir el prefijo "Número: " a cada valor del array.
*/

// Creamos el array
const numeros = [2, 4, 6, 8, 10];
console.log(numeros);

console.log();
console.log("Creamos un nuevo array con el triple de cada número mediante el método map():");

const triple = numeros.map(nums => console.log(Math.pow(nums,3)));

console.log();
console.log("Creamos un array con índice:");

const indice = numeros.map((nums, indice) => console.log((indice + 1) + ".-" + nums));

console.log();
console.log("Añadimos un prefijo a cada valor del array:");

const prefijo = numeros.map((nums) => console.log("Número: " + nums));