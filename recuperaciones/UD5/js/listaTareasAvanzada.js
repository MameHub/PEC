document.addEventListener("DOMContentLoaded", empezar);

/**
 * 
 */
function empezar() {

    // Obtenemos los elementos del documento.
    const inputTarea = document.getElementById('nueva-tarea');
    const botonAgregar = document.getElementById('agregar-tarea');
    const lista = document.getElementById('lista-tareas');

    /**
     * 
     */
    botonAgregar.addEventListener("click", () => {
        
        // Nos quedamos con el texto del input que el usuario a introducido.
        const texto = inputTarea.value.trim();
        if (texto) {
            inputTarea.value = "";
            crearTarea(texto);
        }

    });

    /**
     * 
     */
    function crearTarea(texto) {
        
        const nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `<span class="texto">${texto}</span>
        <div class="acciones"> 
            <button class="editar">Editar</button>
            <button class="arriba">⬆</button>
            <button class="abajo">⬇</button>
            <button class="destacar">Resaltar</button>
            <button class="eliminar">Eliminar</button>
        </div>
        `;

        agregarEventosBotonesTarea(nuevaTarea)
        lista.appendChild(nuevaTarea);

    };

    /**
     * 
     */
    function agregarEventosBotonesTarea(nuevaTarea) {

        const botonEditar = nuevaTarea.querySelector('.editar');
        const botonArriba = nuevaTarea.querySelector('.arriba');
        const botonAbajo = nuevaTarea.querySelector('.abajo');
        const botonDestacar = nuevaTarea.querySelector('.destacar');
        const botonEliminar = nuevaTarea.querySelector('.eliminar');
        const textoAnterior = nuevaTarea.querySelector('.texto');

        // Eventos sobre los botones.
        botonEditar.addEventListener("click", () => {

            const nuevo = prompt("Editar tarea: ", textoAnterior.textContent);
            if (nuevo) {
                textoAnterior.textContent = nuevo;                
            }

        });

        botonDestacar.addEventListener("click", () => {

            nuevaTarea.classList.toggle("destacado");

        });

        botonEliminar.addEventListener("click", () => {

            lista.removeChild(nuevaTarea);

        });

        botonArriba.addEventListener("click", () => {

            const tareaAnterior = nuevaTarea.previousElementSibling;
            if (tareaAnterior) {
                lista.insertBefore(nuevaTarea, tareaAnterior);
            }

        });

        botonAbajo.addEventListener("click", () => {

            const tareaPosterior = nuevaTarea.nextElementSibling;
            if (tareaPosterior) {
                lista.insertBefore(tareaPosterior, nuevaTarea);
            }

        });

    }

}