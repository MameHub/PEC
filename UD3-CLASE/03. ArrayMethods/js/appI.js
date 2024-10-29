// Clase By Maria
const provincia = ["Córdoba","Jaén","Huelva","Málaga"];

// Formas de averiguar si existe un elemento dentro del array.

// 1. Método indexOf
// Devuelve -1 si no lo encuentra
const existe = provincia.indexOf("Huel");
if (existe != -1) {
    console.log(`Existe en la posición ${existe}`);
} else 
    console.log("No existe.");

// Otra forma de que me devuelva el índice
console.log("FIND INDEX");
console.log(provincia.findIndex(p=>p=="Huelva"));

// 2. Método lastIndexOf
// Devuelve -1 si no existe, y devuelve la útlima ocurrencia si existe.
const existeII = provincia.lastIndexOf("Huelva");
if (existe!=-1) {
    console.log(`Existe en la posición ${existe}`);
} else
    console.log("No existe.");

// 3. Método includes
// Devuelve TRUE o FALSE
const existeIII = provincia.includes("Huelva");
if (existeIII) {
    console.log("Existe.");
} else
    console.log("No existe.");

// 4. Método SOME
// SOME recorre el array aplicando una función a cada elemento
// Devuelve TRUE en caso de que la condición se cumple y FALSO en caso contrario.
const existeIV = provincia.some(provincia =>provincia=="Huelva");
if (existeIV) {
    console.log("Existe");
} else
    console.log("No existe");

// Hace lo mismo sin =>
const existeIV_SinFlecha = provincias.some(function(provincia){
    return provincia == "Huelva";
});