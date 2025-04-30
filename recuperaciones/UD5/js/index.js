// Ejemplo para navegar por el DOM

// OBTENER TODO EL DOCUMENTO PARA TRABAJAR CON EL DOM
document.addEventListener("DOMContentLoaded", empezar);     // Espera a que cargue todo, hasta las imagenes
// window.onload;  // Carga el contenido de forma más simple

/**
 * 
 */
function empezar() {
    
    // Seleccionar los elementos del DOM que vamos a necesitar.
    const botonResaltar = document.getElementById("resaltar-primera");
    const botonEliminar = document.getElementById("eliminar-ultima");
    const botonAgregar = document.getElementById("agregar-tarea");
    const lista = document.getElementById("lista-pendientes");   // OBTENEMOS LA LISTA COMPLETA, TODOS LOS <LI> DE <UL>.

    /**
     * 
     */
    botonResaltar.addEventListener("click", () => {
        
        const primeraLinea = lista.firstElementChild;       // OBTENEMOS EL PRIMER ELEMENTO DE LA LISTA.
        if (primeraLinea) { //TIENE UN HIJO LA LISTA.
            primeraLinea.classList.toggle("destacado");     //O se la da o se la quita si la tiene.
        } else {
            alert("No hay elementos en lista para destacar.");
        }

    });

    /**
     * 
     */
    botonEliminar.addEventListener("click", () => {
        
        const ultimaLinea = lista.lastElementChild;     // OBTENEMOS EL ÚLTIMO HIJO DE LA LISTA.
        if (ultimaLinea) {
            lista.removeChild(ultimaLinea);
        } else {
            alert("No hay elementos en la lista para eliminar.");
        }

    });

    /**
     * 
     */
    botonAgregar.addEventListener("click", () => {

        // Creamoe el elemento a añadir.
        const nuevaLinea = document.createElement('li');
        nuevaLinea.textContent = `Nueva tarea ${lista.children.length + 1}`;     // Añadimos texto al elemento añadido.
        nuevaLinea.classList.add('tarea');      //Otorgamos al elemento la clase "tarea".
        lista.appendChild(nuevaLinea);          //Otorgamos a lista la nueva linea <li>.

    });


// RECORRIDO DOCUMENTO GENERAL DE FORMA DINÁMICA
lista.addEventListener('click', (e) => {

    // Nos aseguramos de que es sobre un elemento LI
    if (e.target.tagName == "LI") {
        alert("La tarea seleccionada es: " + e.target.textContent);
        
        // Mostramos el hermano anterior.
        if (e.target.previousElementSibling) {
            alert("El anterior a la tarea seleccionada es: " + e.target.previousElementSibling.textContent);
        }

        // Mostramos el hermano siguiente.
        if (e.target.nextElementSibling) {
            alert("El siguiente a la tarea seleccionada es: " + e.target.nextElementSibling.textContent);
        }
    }

});

}