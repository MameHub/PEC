window.onload = iniciar;

 function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
    //Otra forma de hacerlo
     //const formulario=document.getElementById("miFormulario");
    
    //establecer evento al submit del formulario
    //Validamos la información en el submit
    //formulario.addEventListener("submit", validar);
    
} 

function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {//Comprueba que la validación HTML5 es correcta
         if (elemento.validity.valueMissing) {//La proiead que me indica qué ocurre de verdad
            error2(elemento, "Debe introducir un nombre");
         }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        } 
        //error(elemento);
        return false;
    }
    return true;
}

function validaEdad() {
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        /* if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir una edad")
        }
        if (elemento.validity.rangeOverflow) {
            error2(elemento, "El valor debe ser menor de 100")
        }
        if (elemento.validity.rangeUnderflow) {
            error2(elemento, "El valor debe ser mayor o igual que 18");
        } */
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un teléfono")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El telefono debe tener 9 números");
        } //error(elemento);
        return false;
    }
    return true;
}

function validar(e) {//Necestiamos el evento para que no envíe el formulario encaso de error
    //Limpiamos los erroes que han podido ocurrido antes
    alert("hola")
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;//Mensaje que tiene por defecto la valildación
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];//Aquí podríamos hacerlo de muchas formas que ya hemos visto
    for (var i = 0; i < formulario.elements.length; i++) {//Recorremos todos los inputs
        formulario.elements[i].className = "";
    }
}