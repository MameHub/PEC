document.getElementById("tradicional").onclick = cambiar; //¡¡Sin paréntesis!!
function cambiar() {
    alert("Entramos en cambiar");
    document.getElementById("tradicional").innerHTML = "Modelo de registro de eventos tradicional";
    document.getElementById("tradicional").onclick = null;//ya no tiene el evente onclick nada
}
//Usa window.onload si necesitas que todos los recursos de la página estén cargados antes de ejecutar el código (por ejemplo, si necesitas trabajar con imágenes específicas o estilos ya aplicados). Usa DOMContentLoaded si solo necesitas manipular el DOM y deseas que el código se ejecute tan pronto como el HTML esté listo, sin esperar a que todos los recursos externos terminen de cargar.
window.onload = function () {
    alert("La página ha cargado correctamente");
    document.getElementById("tradicional2").onclick = miMensaje; //¡¡Sin paréntesis!!
}

function miMensaje() {
    document.getElementById("tradicional2").innerHTML = "Modelo de registro de eventos tradicional";
}