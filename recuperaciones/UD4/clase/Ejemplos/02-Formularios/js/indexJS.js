//SELECCION DEL FORMULARIO

//Conociendo el id
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];//Array de formularios de la página

//Conociendo el número de formulario que hay en la página
var formulario3 = document.getElementsByTagName("form")[0];//Queremos todos los formularios d tipo forms de la página, este sería el primero
var formulario4 = document.forms[0];//El primer forulario

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los input del formulario
//getElementById("idElemento") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") Devuelve un array con elementos de un tipo de etiqueta (input, select, etc.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobutton).

window.onload = iniciar; //Sin paréntesis,onload necesita una función a la cual llamar cuando ocurra el evento, no el valor devuelto de una ejecución.
/**window.onload = iniciar; asigna la función iniciar como manejador del evento onload, que se ejecutará cuando se cargue la página.
window.onload = iniciar(); ejecuta la función iniciar inmediatamente y asigna su valor de retorno (si tiene alguno) a window.onload, lo cual no es el comportamiento deseado para un manejador de eventos.
 */

function iniciar() {//Asociar un evento a pulsar el botón enviar
    // Asociar evento al botón Enviar
    document.getElementById("enviar").addEventListener('click', validar, false);
    // Asociar evento al botón Borrar
    document.getElementById("borrar").addEventListener('click', limpiarFormulario, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo nombre no puede ser vacío");
        //Marcar el campo como error
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    limpiarError(elemento);
    if (isNaN(elemento.value)) {
        alert("El campo teléfono tiene que ser numérico");
        error(elemento);
        return false;
    }
    return true;
}

function validaFecha() {
    //Podríamos usar expresiones regulares, lo veremos
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano, mes - 1, dia);
    if (isNaN(fecha)) {
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}
//LA función cvalidar fecha completa
/* function validaFecha() {
    // Obtener los valores del formulario
    var dia = parseInt(document.getElementById("dia").value, 10);
    var mes = parseInt(document.getElementById("mes").value, 10);
    var ano = parseInt(document.getElementById("ano").value, 10);

    // Validar rango del año, mes y día
    if (isNaN(dia) || dia < 1 || dia > 31) {
        alert("El día debe estar entre 1 y 31");
        return false;
    }
    if (isNaN(mes) || mes < 1 || mes > 12) {
        alert("El mes debe estar entre 1 y 12");
        return false;
    }
    if (isNaN(ano) || ano < 1900 || ano > 2100) {
        alert("El año debe estar entre 1900 y 2100");
        return false;
    }

    // Crear la fecha ajustando el índice del mes
    var fecha = new Date(ano, mes - 1, dia);

    // Verificar si la fecha es válida
    if (fecha.getFullYear() !== ano || fecha.getMonth() !== mes - 1 || fecha.getDate() !== dia) {
        alert("La fecha no es válida (día/mes incorrectos)");
        return false;
    }

    return true;
} */

function validaCheck() {
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad");
        return false
    }
    return true;
}
//Compruea que todos os campos son correctos
function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();//evitamos que se envíe el formulario. Evitas el evento por defecto asociado a la acción (submit), es decir, ir a la página procesar
        return false;
    }
}
//marcar qué elemento está mal
function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}
//Elimina la clase error de un elemento 
function limpiarError(elemento) {
    elemento.className = "";
}
// Función para limpiar los estilos de error
function limpiarFormulario() {
    //Los eventos van a ser establecidos sobre los campos de texto (INPUT)
    const elementosInput =document.getElementsByTagName("input");
    //Recorremos la lista de elementos de tipo INPUT, que en este caso son 2.
    for (const element of elementosInput) 
        {
            limpiarError(element);
        }
}

//Difrencia entre acceder a los elementos desde document o desde el formulario
/** var input = document.getElementById("nombre");// Acceso por atributo ID
 * var formulario = document.getElementById("miFormulario");
    var input = formulario.elements["nombre"]; // Acceso por atributo NAME
 */
