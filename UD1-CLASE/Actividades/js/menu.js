/*
3. Escribe un programa que ponga en práctica la siguiente lógica:
a) Mostrar el siguiente menú y el usuario deberá elegir una de las
opciones.
1.- Área de triángulo
2.- Área de rectángulo
3.- Media aritmética de dos números
4.- Salir
b) En función de la opción que elija el usuario se le pedirán los
datos necesarios en cada caso.
c) El programa calculará el resultado y lo mostrará en la consola.
d) La lógica anterior se repetirá indefinidamente hasta que el
usuario pulse la opción 4 para salir que mostrará un mensaje por
consola, Fin del ejercicio.
e) Si la opción no esta entre el rango 1-4 se mostrará un error
mediante la función alert() y se volverá a pedir otra opción.
*/

// Variables.
let option, result, x, y;

// Menú.
do{
    
option = parseInt(prompt("Intorduzca una opción:\n1.- Área de triángulo.\n2.- Área de rectángulo.\n3.- Media aritmética de dos números.\n4.- Salir."));

    switch(option){
        case 1:
            x = parseFloat(prompt("Introruzca la altura: "));
            y = parseFloat(prompt("Introruzca la base: "));
            result = (x * y) / 2;
            console.log(`El área del triángulo de altura ${x} y de base ${y} es de ${result}`);
            alert(`El área del triángulo de altura ${x} y de base ${y} es de ${result}`);
            break;
        case 2:
            x = parseFloat(prompt("Introduzca el largo: "));
            y = parseFloat(prompt("Introduzca el ancho: "));
            result = x * y;
            console.log(`El área del rectangulo con ${x} de largo y ${y} de anchura es de ${result}`);
            alert(`El área del rectangulo con ${x} de largo y ${y} de anchura es de ${result}`);
            break;
        case 3:
            x = parseFloat(prompt("Introduzca el primer número: "));
            y = parseFloat(prompt("Introduzca el segundo número: "));
            result = (x + y) / 2;
            console.log(`La media aritmética de ${x} y ${y} es de ${result}`);
            alert(`La media aritmética de ${x} y ${y} es de ${result}`);
            break;
        case 4:
            console.log("Fin.")
            break;
        default:
            alert("La opción introducida no es válida.");
            console.log("La opción introducida no es válida.")
            break
    }

} while(option != 4);