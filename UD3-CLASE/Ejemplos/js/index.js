// Declaración tradiconal
function multiplicar(a){
    return (a*5);
}

console.log(multiplicar(2));

// Expresión de función
const multiplicarII = function (a, b=1) {
    return a*b;
}

console.log(multiplicarII(4));
console.log(multiplicarII(4,2));

const multiplicarIII = function multiplicarInterno(a, b=10) {
    return a*b;
}

console.log(multiplicarIII(5,7));
// console.log(multiplicarInterno(5,7)); Da error

// Función flecha
const multiplicarIV = (a,b=10) => {
    return a*b;
}

const multiplicarV = (a,b=10) => a*b;

const multiplicarVI = a => a*10;

console.log(multiplicarIV(5,6));
console.log(multiplicarV(4,6));
console.log(multiplicarVI(10));