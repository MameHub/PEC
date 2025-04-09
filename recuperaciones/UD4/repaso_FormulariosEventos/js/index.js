// 
window.onload = iniciar;

// 
function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar);
}

function validar() {

}

function validarNombre() {
    const elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing || elemento.lenght < 2 || elemento.lenght > 50) {
            
        }
    }
}

function validarEmail() {

}

function validarDNI() {

}

function validarFecha() {

}

function validarHora() {

}

function validarAsignatura() {

}

function validarComentarios() {

}