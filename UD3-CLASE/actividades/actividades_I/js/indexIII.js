/*
author Álvaro Cañas
Ejercicio 3. Inserción y eliminación de elementos.
    Dado el array const numeros = [10, 20, 30, 40]; realiza lo siguiente:
    1. Inserta el número 5 al inicio del array.
    2. Inserta el número 50 al final del array.
    3. Elimina el primer elemento.
    4. Elimina el último elemento.
    5. Utiliza splice para eliminar el segundo elemento y añadir en su lugar los números 25 y 35.
*/

// Creamos un array de números.
const numeros = [10, 20, 30, 40];
console.log(numeros);

console.log();
console.log("Insertamos un elemento al inicio.");

numeros.unshift(5);
console.log(numeros);

console.log();
console.log("Insertamos un elemento al final.");

numeros.push(50);
console.log(numeros);

console.log();
console.log("Eliminamos el primer elemento.");

numeros.shift();
console.log(numeros);

console.log();
console.log("Eliminamos el último elemento.");

numeros.pop();
console.log(numeros);

console.log();
console.log("Utilizamos splice para sustituir el segundo elemento por dos números.");

numeros.splice(1, 1, 25, 35);
console.log(numeros);