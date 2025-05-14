"use strict"

window.addEventListener("load", ()=>{
//Comprobar si ya hay unaconfiguración guardada en cookies o localStorage
const configuracion = leerAlmacenado();
if(configuracion){
    aplicarConfiguracion(configuracion);
}

//Leer el formulario
document.getElementById("formulario").addEventListener("submit", (event) =>{
    //Evito las acciones por defecto
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const tema = document.getElementById("tema").value;
    const avatar = document.getElementById("avatar").value;
    const almacenamientoSelecc = document.querySelector('input[name="almacenamiento"]:checked');

    //Validar que los campos no estén vacíos
    if (!nombre || !edad ){
        alert("Por favor, completa el formulario");
        return;
    }
    //Crear el objeto 
    const configuracion = {nombre, edad, tema, avatar};

    //Según quiera guardar como cookie o como localStorage
    if (almacenamientoSelecc.value == "cookies"){
        crearCookie("configuracion", JSON.stringify(configuracion));
    }else{
        localStorage.setItem("configuracion",JSON.stringify(configuracion));
    }
    aplicarConfiguracion(configuracion);
});
});

function aplicarConfiguracion({nombre, edad, tema, avatar}){
    document.getElementById("estilos").href = tema; //Cambiammos la ferencia al tema
    document.getElementById("mensaje").innerHTML = `Hola ${nombre} -> ${avatar}!! Tienes ${edad} años.`;
    document.getElementById("formulario").style.display = "none";
}
//Crear cookie
function crearCookie(nombre, valor){
    document.cookie = `${nombre}=${valor};`;
}
// Leer cookie
function leerCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [clave, valor] = cookie.split("=");
        if (clave === nombre) {
            return decodeURIComponent(valor);
        }aplicarConfiguracion
    }
    return null;
}
function leerAlmacenado(){
    const confiCookie = leerCookie("configuracion");//Buscamos si existe la cookie con esta clave
    if (confiCookie){//Hay una configuración almacenada en la cookie
        return JSON.parse(confiCookie);
    }
    const confLocalStorage = localStorage.getItem("configuracion");
    if(confLocalStorage){//Hay una configuración almacenada en localStorage
        return JSON.parse(confLocalStorage);
    }
    return null;
}