window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click",validar);
}

function validar(e) {
    e.preventDefault(); //Quitamos el evento por defecto.
}

function validarNombre() {
    const elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) { //Comprobamos la validación del HTML
        if (elemento.validity.valueMissing) {
            alert("El campo nombre tiene que tener algo");
        }
        if (elemento.validity.patternMismatch) {
            alert("El nombre debe tener 2 a 15 caracteres.");
        }
        return false;
    }
    return true;
}