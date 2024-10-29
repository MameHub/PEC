// Formas dereducir un array a un solor valor.
// La suma de los elementos de un array
const numeros = [20,3,5,7,100,35];
let suma = 0;
// 1. Usando un for
for (let i = 0; i < numeros.length; i++) {
    suma+=numeros;
}
console.log(suma);
// 2. Usando un foreach
sumo = 0;
numeros.forEach(numero => {
    suma += numero;
});
console.log(suma);
// 3. Método reduce
// Permite aplicar una función reductora al conjunto de elementos del array.
// 1º parámetro es una variable acumuladora, el 2º es el elemento del array.
const resultado = (numeros.reduce((suma,numero)=>suma+numero));
console.log(resultado);

// Encontrar el máximo valor de un array
const maximo = numero.reduce(function(max,numero){
    return numero > max ? numero : max;
});
console.log(maximo);