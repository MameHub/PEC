//Selección de elementos
const inputTarea = document.getElementById()
const 
const 

//Función de crear una tarea según un texto dado
function crearTarea(texto){
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `<span class="texto">${texto}</span>
    <div class="acciones">
        <button class="editar">Editar</button>
        <button class="arriba">↑</button>
        <button class="abajo">↓</button>
        <button class="destacar">Resaltar</button>
        <button class="eliminar">Eliminar</button>
    </div>
    `
}

//Agregar eventos a los botones de una tarea
function agregarEventosTarea(tarea){
    const botonEditar = tarea.querySelector('.editar');
    const botonArriba = tarea.querySelector('.arriba');
    const botonAbajo = tarea.querySelector('.abajo');
    const botonDestacar = tarea.querySelector('.destacar');
    const botonEliminar = tarea.querySelector('.eliminar');
    const textoTarea = tarea.querySelector('.texto');

    //Añadir todos los eventos de los botones
    botonEditar.addEventListener("click",()=>{
        const nuevoTexto = prompt("Editar tarea:",textoTarea.textContent);
        if (nuevoTexto){
            textoTarea.textContent = nuevoTexto;
        }
    });
    botonArriba.addEventListener("click", ()=>{
        const tareaAnterior = tarea.previousElementSibling;
        if(tareaAnterior) {
            //Si existe un hermano anterior, movemos la tarea antes de este hermano.
            listaTareas.insertBefore(tarea, tareaAnterior);
        }
    });
    botonAbajo.addEventListener("click", ()=>{
        const tareaSiguiente = tarea.nextElementSibling;
        if(tareaSiguiente){
            //Si existe un hermano siguiente, movemos la tarea después de este hermano.
            listaTareas.insertBefore(tarea,tareaSiguiente);
        }
    });
    botonDestacar.addEventListener("click", ()=>{
        tarea.classList.toggle("destacado");
    });
    botonEliminar.addEventListener("click", ()=>{
        listaTareas.removeChild(tarea);
    });
}

botonAgregar.addEventListener('click', ()=>{
    //Quedarnos con el texto del  input que el usuario ha introducido
    const texto = input
})