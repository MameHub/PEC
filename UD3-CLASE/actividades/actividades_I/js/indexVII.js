/*
author Álvaro Cañas
Ejercicio 7. Arrays bidimensionales
    Crea un array bidimensional de 3x2 con los nombres de frutas y sus respectivos precios, por ejemplo: [['Manzana', 1], ['Pera', 1.5], ['Uva', 2]]. Después:
    1. Usa un bucle for anidado para recorrer y mostrar cada fruta y su precio.
    2. Añade una nueva fruta con su precio al final del array.
    3. Muestra el array completo en formato de tabla con console.table.
*/

console.log("Creamos un array bidimensional con frutas y su precio.");
const frutas = [['Manzana', 1],['Pera',1.5],['Uva',2],['Cereza',2.5],['Piña',3],['caqui',4],['Naranja',5.5]];

console.log("Recorrido del array bidimensional mediante un bucle for anidado.");
for (let i = 0; i < frutas.length; i++) {
    for (let j = 0; j < frutas[i].length; j++) {
        console.log(frutas[i][j]);
    }
}

console.log("Adición de una nueva fruta con su nombre al final del array.");
frutas.push(['coco',7]);
console.log(frutas);

console.log("Mostramos el array completo en forma de tabla.");
console.table(frutas);