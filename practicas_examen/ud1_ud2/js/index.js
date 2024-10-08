// Variables
// let intervalo = 10;
let intervalo;
let segundos = 0;
let frase = "";
let palabras = 0;
let ventana;

// 
// ventana = window.open("","","width=500, height=500");

// 
intervalo = setInterval(obtenerSegundos, 1000);
function obtenerSegundos() {
    segundos++;
    // segundos = new Date();
    // ventana.document.body.innerHTML = segundos.getSeconds();
    ventana.document.body.innerHTML = segundos;
}

function cerrarVentana() {
    // if(ventana != undefined && ventana!=window.close) {
        if(segundos === 10) {
            ventana = window.close();
        }
    // }
}