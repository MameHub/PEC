
//for
let numero, i;

for (i = 0; i <20; i++){
    console.log(`El número es ${i}`);
}

//Foreach
console.log("Con Foreach");
const numeros= [1,2,3,4,5];
numeros.forEach(function(numero){
    console.log(numero);
})
console.log("Con for");
for (i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}
total = 0;

//bucle do...while
do{
    numero = parseInt(prompt("(DO-WHILE)Introduce un número, 0 para FIN"));
    if ( numero != 0){
        total += numero; //total = total +numero
    }
}while(numero!=0);

console.log(`El resultado de la operación es ${total}`);
total = 0;
//bucle while
numero = parseInt(prompt("(WHILE 1º)Introduce un número, 0 para FIN"));
while(numero != 0){
    total += numero;
    numero = parseInt(prompt("(WHILE resto)Introduce un número, 0 para FIN"));
}
console.log(`El resultado de la operación es ${total}`);