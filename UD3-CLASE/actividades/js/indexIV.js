/*
author Álvaro Cañas
Ejercicio 4. Copias de arrays
    Dado el array const frutas = ['manzana','pera','uva','mango'];:
    1. Haz una copia del array usando el método slice.
    2. Haz otra copia utilizando el operador spread.
    3. Modifica el array original añadiendo una fruta nueva al final.
    4. Muestra ambos arrays copiados por consola y verifica que no han cambiado.
*/

// Creamos un array con cadenas de caracteres.
const frutas = ['manzana','pera','uva','mango'];
console.log(frutas);

// Creamos una copia del mismo con el método slice().
copiaFrutas = frutas.slice();
console.log(copiaFrutas);

// Creamos otra copia utilizando el operador spread.
copiaFrutas2 = [...frutas];
console.log(copiaFrutas2);

// Modificamos el array original.
frutas.push('cereza');
console.log(frutas);

// Mostramos ambos arrays.
console.log(copiaFrutas);
console.log(copiaFrutas2);