/*
author Álvaro Cañas
Ejercicio 1. Declaración y acceso a elementos de un array
    Crea un array de 5 elementos con los nombres de tus provincias favoritas. Después:
    1. Añade una provincia nueva al final del array.
    2. Muestra la longitud del array y todos sus elementos usando console.table.
    3. Usa coneole.log para acceder al tercer elemento del array utilizando at() y la notación de corchetes.
*/

// Creamos el array.
const provincias = ['Córdoba', 'Málaga', 'Salamanca', 'León', 'Asturias'];
console.log(`Creación del array: ${provincias}`);

// Añadimos un elemento al final del array.
provincias.push('Jaén');
console.log(`Elemento nuevo al final del array: ${provincias}`);

// Mostramos las provincias en forma de tabla.
console.table(provincias);
console.table(provincias.length);

// Mostramos el tercer elemento del array.
console.log(provincias.at(2));
console.log(provincias[2]);

/* Método alternativo.
let provincias = [5];
provincias = ['Córdoba', 'Málaga', 'Salamanca', 'León', 'Asturias'];
console.log(provincias);
*/