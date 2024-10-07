// Propiedades básicas de Windows
window.name = "Ventana principal";
var texto = "";
// Nombre de la ventana
texto += "<br/>Nombre: "+window.name;
// Tamaño de la ventana con toolbar y scrollbar
texto += "<br/>Ancho externo: "+window.outerWidth;
texto += "<br/>Alto externo: "+window.outerHeight;
// Tamaño de la ventana sin toolbar y scrollbar
texto += "<br/>Alto interno: "+window.innerWidth;
texto += "<br/>Alto interno: "+window.innerHeight;
// Distancia con la esquina superior izquierda
texto += "<br/>Distancia desde la izquierda: "+window.screenX;
document.getElementById("ventanaPpal").innerHTML = texto;

// MÉTODOS DE WINDOWS IMPORTANTES
let miVentanaSecundaria;
// crearVentana()
function crearVentana(){
    miVentanaSecundaria = window.open("","","width=500","height=200");
    miVentanaSecundaria.document.write("<h1>Mi ventana secundaria</h1>");
}
// Cerrar ventana
function cerrarVentana(){
    miVentanaSecundaria.close();
}
// Redimensionar ventana
function redimensionarVentana(){
    miVentanaSecundaria.resizeBy(10,10);
}
// Mover ventana
function moverVentana(){
    miVentanaSecundaria.moveBy(10,10);
}
// focus
function enfocar(){
    miVentanaSecundaria.focus();
}