// Variables.
let frase = "";

frase = prompt("Introduzca una frase: ");
if(charCodeAt(32) > 1) {
    alert("El texto introducido tiene más de un espacio.");
} else {
    alert(`La frase introducida es la siguiente: ${frase}`);
}

function ventanaResultad(frase) {
    
}