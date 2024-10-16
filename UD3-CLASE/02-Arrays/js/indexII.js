// Recorrido de un array.

const numeros = [1,2,3,,"cinco"];

// Vamos a declarar funciones para recorrer arrays de distintas formas.

// Recoorrer con un bucle for(forma tradicional).
const recorrerFor = function(){ // Expresión de función anónima.
    console.log("For tradicional");
    for(let i = 0; i<numeros.length;i++){
        // console.log(numeros[i]);
        console.log(`${i+1}- ${numeros[i]}`); // Hacen lo mismo más correcto.
    }
}
recorrerFor();

// Recorrido con bucle for in
// Ignora los elementos vacíos de un array.
const recorrerForIn=()=>{
    console.log("For In");
    for(const i in numeros){
        console.log(`${i}- ${numeros[i]}`); // Hacen lo mismo más correcto.
    }
}
recorrerForIn();

// Recorrido con bucle for of
// No necesitamos indice, accede a cada elemento.
// Si recorre los vacíos.
const recorrerForOf=()=>{
    console.log("For Of");
    for(const elemento of numeros){
        console.log(`${elemento}`);
    }
}
recorrerForOf();

// Recorrer con un bucle foreach
// Ignora los elementos vacíos de un array.
const recorrerForEach=()=>{
    console.log("For each");
    numeros.forEach(elemento=>{
        console.log(`${elemento}`);
    })
    console.log("For each 2");
    numeros.forEach((elemento,i)=>{
        console.log(`${i+1}. ${elemento}`);
    })
}
recorrerForEach();