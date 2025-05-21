// Cargamos el documento HTML e iniciamos la función "comenzar".
document.addEventListener("DOMContentLoaded", comenzar);

/**
 * 
 */
function comenzar() {

    

};

/**
* 
*/
function crearFormulario() {

    const formulario = document.createElement("form");
    formulario.innerHTML = `
    <label>nombre: <input type="text" id="nombre"></label><br>
    <label>Fecha de nacimiento: <input type="date" id="fecha"></label><br>
    Color de fondo:<br>
    <label><input type="radio" name="color" value="Lightblue" checked>Lightblue </label><br>
    <label><input type="radio" name="color" value="Lightgreen" checked>Lightgreen </label><br>
    <label><input type="radio" name="color" value="Lightyellow" checked>Lightyellow </label><br>
    <label><input type="radio" name="color" value="Lightpink" checked>Lightpink </label><br>
    `;



};

/**
 * 
 */
function crearjuego() {



}