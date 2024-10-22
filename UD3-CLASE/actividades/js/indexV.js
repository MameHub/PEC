/*
author Álvaro Cañas
Ejercicio 5. Destrunturing
    Dado el array const colores = ['rojo','verde','azul','amarillo'];:
    1. Usa destrunturing para extraer el primer y segundo color en variables llamadas primerColor y segundoColor.
    2. Usa destructuring para extraer el último color en una variable llamada ultimoColor.
    3. Intercambia los valores de dos variables utilizando destructuring.
*/

// Creamos el array colores y las variables primerColor, segundoColor y ultimoColor.
const colores = ['rojo','verde','azul','amarillo'];
let primerColor, segundoColor, ultimoColor;
console.log(colores);
// Almacenamos en las variables primerColor y ultimoColor el primer y segundo valor del array colores.
[primerColor, segundoColor,,] = colores;
console.log(`Primer elemento: ${primerColor}. Segundo elemento: ${segundoColor}`);
// Almacenamos en ultimoColor el ultimo valor del array colores.
[,,,ultimoColor] = colores;
console.log(`Último color: ${ultimoColor}`);
// Intercambiamos los valores de primerColor y segundoColor.
[primerColor, ultimoColor] = [ultimoColor, primerColor]
console.log(`Primer color: ${primerColor}, último color: ${ultimoColor}`);