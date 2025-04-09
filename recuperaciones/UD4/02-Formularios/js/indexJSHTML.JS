window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click",validar);
}

function validar(e) {
    borrarError();
    e.preventDefault(); //Quitamos el evento por defecto.
    if (validarNombre() && validarEdad() && validarTelefono() && confirm("Pulsa aceptar si deseas enviar los datos del formulario")) {
        alert("Enviando datos...");
    }
}

function validarNombre() {
    const elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) { //Comprobamos la validación del HTML
        if (elemento.validity.valueMissing) {
            // alert("El campo nombre tiene que tener algo");
            // error(elemento);
            error2(elemento, "El campo nombre tiene que tener algo");
        }
        if (elemento.validity.patternMismatch) {
            // alert("El nombre debe tener 2 a 15 caracteres");
            // error(elemento);
            error2(elemento, "El nombre debe tener 2 a 15 caracteres");
        }
        return false;
    }
    return true;
}

function validarEdad() {
    const elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            // alert("El campo edad tiene que tener algo");
            // error(elemento);
            error2(elemento, "El campo edad tiene que tener algo");
        }
        if (elemento.validity.rangeOverflow) {
            // alert("El valor debe ser menor de 100");
            // error(elemento);
            error2(elemento, "El valor debe ser menor de 100");
        }
        if (elemento.validity.rangeUnderflow) {
            console.log("aqui");
            // alert("El valor debe ser mayor de 17");
            // error(elemento);
            error2(elemento, "El valor debe ser mayor de 17");
            // no funciona
        }
        return false;
    }
    return true;
}

function validarTelefono() {
    const elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            // alert("El campo teléfono tiene que tener algo");
            // error(elemento);
            error2(elemento, "El campo teléfono tiene que tener algo");
        }
        if (elemento.validity.patternMismatch) {
            // alert("El teléfono debe tener 9 números")
            // error(elemento);
            error2(elemento, "El teléfono debe tener 9 números");
        }
        return false;
    }
    return true;
}

function error(elemento) {
    const errores = document.getElementById("mensajeError");
    errores.innerHTML = elemento.validationMessage; // Mensaje que tiene por defecto la validación del HTML
    elemento.ClassName = "error";
    elemento.focus();
}

function error2(elemento, mensaje) {
    const errores = document.getElementById("mensajeError");
    errores.innerHTML = mensaje; // Mensaje que tiene por defecto la validación
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}