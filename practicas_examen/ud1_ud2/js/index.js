// Variables
// let intervalo = 10;
let intervalo;
let segundos = 10;
let frase = "";
let palabras = 0;
let ventana;

// Le pedimos al usuario que introduzca una frase, esta no podrá tener simbolos ni mas de un espacio entre palabras.
frase = prompt("Introduzca una frase.");

// Creamos la ventana que contendra la información.
ventana = window.open("","","width=500, height=500");

// Creamos una función para contar las letras de la frase introducida.
function contarPalabras() {

}

// Creamos un intervalo que vaya segundo a segundo en la función "obtenerSegundos()".
intervalo = setInterval(obtenerSegundos, 1000);
// Creamos una función para obtener los segundos que se mantiene la ventana abierta y los mostramos, una vez que llegue a diez cerramos la ventana, llamando a dicha función.
function obtenerSegundos() {
    segundos--;
    ventana.document.body.innerHTML = segundos;
    if (segundos === 0) {
        cerrarVentana();
    }
}

// Creamos una función para cerrar la ventana en caso de que siga abierta.
function cerrarVentana() {
    if(ventana != undefined && !ventana.close()) {
        ventana.close();
    }
}