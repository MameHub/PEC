/*
author Álvaro Cañas
Ejercicio 2. Recorrido de arrays
    Declara un array mixto que contenga 5 elementos de diferentes tipos de datos (números, strings, booleanos, etc.). Recorre esta array utilizando:
    1. Un bucle for tradicional.
    2. Un bucle for...in.
    3. Un bucle for...of.
    4. Un bucle forEach.
*/

// Creamos un array mixto y lo mostramos por consola.
const array = [9, 11, "elemento3", true, 2.5, "Último elemento"];
console.table(array);

console.log();
console.log("For tradicional:");

// Recorremos el array con un for.
for (let index = 0; index < array.length; index++) {
    console.log(`${index+1}.- ${array[index]}`);
}

console.log();
console.log("For...in:");

// Recorremos el array con un for...in.
for (const i in array) {
    console.log(`${i}.- ${array[i]}`);
}

console.log();
console.log("For...of:");

// Recorremos el array con un for...of.
for (const elemento of array) {
    console.log(elemento);
}

console.log();
console.log("ForEach sin índice:");

// Recorremos el array con un forEach.
array.forEach(element => {
    console.log(element);
});

console.log();
console.log("ForEach con índice:");

// Recorremos el array con un forEach.
array.forEach((element, i) => {
    console.log(`${i+1}.- ${element}`);
});