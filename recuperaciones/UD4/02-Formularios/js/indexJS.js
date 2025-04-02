//Seleccionar el formulario
//Conociendo el id
const formulario = document.getElementById("miFormulario");
// const formulario = document.forms["miFormulario"];
const formulario2 = document.getElementsByTagName("form")[0]; //Aunque solo haya un elemento, cuando uso TagName siempre me devuelve un array.
const formulario3 = document.forms[0];

// Cuando cargue toda la página.
window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar);
    document.getElementById("borrar").addEventListener("click", limpiarFormulario);
}

function validarNombre(e) {
    // e.preventDefault(); //Evitamos que se envíe el formulario. El evento por defecto.
    const elementoNombre = document.getElementById("nombre");
    limpiarError(elementoNombre);
    if (elementoNombre.value == "") {
        alert("El campo nombre no puede estar vacío.");
        error(elementoNombre);
        return false;
    }
    return true;
}

function validarTelefono(e) {
    // e.preventDefault(); //Evitamos que se envíe el formulario. El evento por defecto.
    const elementoTelefono = document.getElementById("telefono");
    limpiarError(elementoTelefono);
    if (isNaN(elementoTelefono.value) || elementoTelefono.value == "") {
        alert("El campo teléfono debe ser númerico y no estar vacío.");
        error(elementoTelefono);
        return false;
    }
    return true;
}

function validaFecha(e) {
    // e.preventDefault();
    // Obtener los valores del formulario
    var dia = parseInt(document.getElementById("dia").value, 10);
    var elementoDia = document.getElementById("dia");
    limpiarError(elementoDia);
    var mes = parseInt(document.getElementById("mes").value, 10);
    var elementoMes = document.getElementById("dia");
    limpiarError(elementoMes);
    var ano = parseInt(document.getElementById("ano").value, 10);
    var elementoAnno =  document.getElementById("dia");
    limpiarError(elementoAnno);

    // Validar rango del año, mes y día
    if (isNaN(dia) || dia < 1 || dia > 31) {
        alert("El día debe estar entre 1 y 31");
        error(elementoDia);
        return false;
    }
    if (isNaN(mes) || mes < 1 || mes > 12) {
        alert("El mes debe estar entre 1 y 12");
        error(elementoMes);
        return false;
    }
    if (isNaN(ano) || ano < 1900 || ano > 2100) {
        alert("El año debe estar entre 1900 y 2100");
        error(elementoAnno);
        return false;
    }

    // Crear la fecha ajustando el índice del mes
    var fecha = new Date(ano, mes - 1, dia);

    // Verificar si la fecha es válida
    if (fecha.getFullYear() !== ano ||  fecha.getMonth() !== mes - 1 || fecha.getDate() !== dia) {
        alert("La fecha no es válida (día/mes incorrectos)");
        return false;
    }

    return true;
}

function validarCheck(e) {
    // e.preventDefault();
    const campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad.");
        return false;
    }
    return true;
}

function validar(e) {
    e.preventDefault();
    if(validarNombre() && validarTelefono() && validaFecha() && validarCheck() && confirm("Pulsa aceptar si deseas enviar el formulario.")) {
        alert("Enviando...");
    }
}

function limpiarFormulario() {
    const elementosInput = document.getElementsByTagName("input"); //Obtenemos todos los elementos cuya etiqueta sea "input", esto nos devuelve un array como se indica arriba.
    //Recorremos la lista de inputs.
    for (const elemento of elementosInput) {
        if (elemento.type == "text") { //Así evitamos eliminar los botones de envio y borrar.
            elemento.value = "";
        }
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}