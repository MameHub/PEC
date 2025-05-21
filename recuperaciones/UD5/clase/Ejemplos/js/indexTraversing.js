//EJEMPLO PARA NAVEGAR POR EL DOM
//Seleccionar los elementos del DOM que vamos a necesitar
const contenedor = document.getElementById("contenedor");
const lista = document.getElementById("lista-pendientes");
const botonResaltar = document.getElementById("resaltar-primera");
const botonEliminar = document.getElementById("eliminar-ultima");
const botonAgregar = document.getElementById("agregar-tarea");

//Función para resaltar la primera tarea
botonResaltar.addEventListener('click',()=>{
    const primeraLinea = lista.firstElementChild;
    if(primeraLinea){//Comprobamos que tiene un hijo al menos
        primeraLinea.classList.toggle('destacado');//Cambiar a destacado la clase del elemento, pero si ya la tiene asignada, la quita
    }else{
        console.log("No hay elementos en la lista");
    }
});
//Función para eliminar la útlima tarea
botonEliminar.addEventListener('click', () => {
    //Acceder al último hijo de la lista
    const ultimo = lista.lastElementChild;
    if(ultimo){
        lista.removeChild(ultimo);
    }else{
        console.log("No hay elementos para eliminar en la lista");
    }
});
//Función para agregar una nueva tarea
botonAgregar.addEventListener('click',()=>{
    //Creamos un nuevo eleento tipo li
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent =`Nueva tarea ${lista.children.length + 1}`;//Podemos saber cuantos hijos tiene un elemento
    nuevaTarea.classList.add('tarea');
    lista.appendChild(nuevaTarea);//Añadimos a la lista la nueva tarea
});
//Ejemplo de traversing general
lista.addEventListener('click',(event)=>{
    //Limpiamos consola
    console.clear();//Limpiamos la consola con cada clic
    if(event.target.tagName == 'LI'){//Verificamos que el clic fue sobre un LI, no sobre cualquier parte de la lista
        console.log('Tarea seleccionada:',event.target.textContent);//Mostramos el texto de la tarea seleccionada
        //Vamos a mostrar al heramno anterior de elemento que ha hecho clic
        const tareaAnterior = event.target.previousElementSibling;
        //Vamos a mostrar al heramno siguiente de elemento que ha hecho clic
        const tareaSiguiente= event.target.nextElementSibling;
        if(tareaAnterior){//Comprobamos que hay una tarea anterior y mostramos su texto
            console.log("Tarea anterior:",tareaAnterior.textContent);
        }else{
            console.log("No hay tarea anterior.");
        }
        if(tareaSiguiente){//Comprobamos que hay una tarea siguiente y mostramos su texto
            console.log("Tarea siguiente:",tareaSiguiente.textContent);
        }else{
            console.log("No hay tarea siguiente.");
        }
    }
});