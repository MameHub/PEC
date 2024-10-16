// Insertar datos a un array al final y al principio.

// Declaramos un array mixto.
const numeros = [1,2,3,4,"cinco"];
console.log(numeros.length);

// Insertamos elemento al final.
// Forma 1
numeros[numeros.length]=6;
console.table(numeros);

// Forma 2 - Mediante el PUSH
numeros.push(999);
console.table(numeros);
numeros.push(1);
console.table(numeros);

console.log(numeros.length);

// Eliminar elementos de un array
// Forma 1- DELETE
delete numeros[2]; // Borrar el dato pero no elimina el elemento de memoria. Permanece el índice.

// Forma 2 - elimino el último con pop
console.log(numeros.pop());
console.table(numeros);

// Forma 3 - Eliminar el primero con SHIFT
console.log(numeros.shift());
console.table(numeros);

// Forma 4 - Eliminar en una posición específica de forma correcta SPLICE
// Elimina desde la posición inicial tantso elementos como indiquen el segundo argumento.s
console.table(numeros);
console.log(numeros.splice(2,1));
console.log(numeros.splice(2)); // Solo un parámetro, me borra hasta el final.
console.table(numeros);

// SPLICE también permite añadir elementos en mitad de un array
// Inserta valor 77,88,99 a partir de la posición 2.
numeros.splice(2,0,77,88,99);
console.table(numeros);
// Sustituye dose elementos a partir del 2.
numeros.splice(2,2,77,88,99);
console.table(numeros);