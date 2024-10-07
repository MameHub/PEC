/*
1. Números: Crea un script que muestre los números impares que no
sean múltiplo de 3 ni de 7 que se encuentren entre el 100 al 1.
Realizar versiones del programa usando bucles while, do while y for.
*/

let num = 0;

// Con while
while(num < 100) {
    num++;
    if (num % 2 != 0) {
        if (num % 3 != 0 && num % 7 != 0) {
            console.log(`${num} es impar y no es múltiplo de 3 ni de 7`);
        }
    }
}

// Con do while
do {
    num++;
    if (num % 2 != 0) {
        if (num % 3 != 0 && num % 7 != 0) {
            console.log(`${num} es impar y no es múltiplo de 3 ni de 7`);
        }
    }
} while(num < 100)

// Con for
for (let number = 0; number <= 100; number++) {
    if (number % 2 != 0) {
        if (number % 3 != 0 && number % 7 != 0) {
            console.log(`${number} es impar y no es múltiplo de 3 ni de 7`);
        }
    }
}