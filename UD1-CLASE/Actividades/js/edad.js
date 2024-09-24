/*
2. Realiza un script con if y otro con switch que permita introducir la
edad de una persona, mediante la función prompt y muestre un mensaje
de pidiendo la edad.
- Si la edad es menor de 18 años, se mostrará el mensaje,
"Eres menor de edad"
- Si la edad es mayor de 18 y menor o igual de 30 años, se mostrará
el mensaje, "Eres muy joven"
- Si la edad es mayor de 30 y menor o igual a 60 años, se mostrará
el mensaje "Eres una persona adulta".
- Si la edad es mayor de 60, se mostrará el mensaje, "Eres una
persona mayor".
- Si la edad es un dato incorrecto, mostrará un mensaje "Error, 
debe ser un número".
*/

let edad = parseInt(prompt("Introduzca su edad:"));

// Ejercicio con if-else.
if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad <= 30) {
    console.log("Eres muy joven.");
} else if (edad <= 60) {
    console.log("Eres una persona adulta.");
} else if (edad > 60) {
    console.log("Eres una persona mayor.");
} else if (typeof(edad) != Number) {
    console.log("Error, debe ser un número.");
}


// Ejercicio con switch.
switch(true){
    case edad < 18:
        console.log("Eres menor de edad.");
        break;
    case edad > 18 && edad <= 30:
        console.log("Eres muy joven.");
        break;
    case edad > 30 && edad <= 60:
        console.log("Eres una persona adulta.");
        break;
    case edad > 60:
        console.log("Eres una persona mayor.");
        break;
    default:
        console.log("Error, debe ser un número.");
        break;
}