//CREAR Nodos en el DOM - DIV - appendChild
document.getElementById("crearNodoDIV").addEventListener("click",()=>{
    //Creamos un nodo de elemento <div>
    const nuevoElemento = document.createElement("div");
    //Crear un nodo de texto
    const texto = document.createTextNode("Esto es un contenedor appendChild");
    //Agrego el nodo de texto al nodo DIV
    nuevoElemento.appendChild(texto);

    document.getElementById("contenedorVacio").appendChild(nuevoElemento);

    alert("Nodo DIV con texto creado y añadido con appendChild");

});
//CREAR Nodos en el DOM - P - appendChild
document.getElementById("crearNodoP").addEventListener("click",()=>{
    //Creamos un nodo de elemento <div>
    const nuevoElemento = document.createElement("p");
    //Crear un nodo de texto
    const texto = document.createTextNode("Este es un párrafo appendChild");
    //Agrego el nodo de texto al nodo DIV
    nuevoElemento.appendChild(texto);

    document.getElementById("contenedorVacio").appendChild(nuevoElemento);

    alert("Nodo P con texto creado  y añadido conappendChild");

});
//CREAR Nodos con append
document.getElementById("append").addEventListener("click", ()=>{
    //Crear un Nodo
    const nuevoParrafo = document.createElement("p");
    //Agregar directamente el nodo usando textContent
    nuevoParrafo.textContent = "Este es un párrafo creado con append().";

    document.getElementById("contenedorVacio").append("Texto adicional: ",nuevoParrafo)
});

//ELIMINAR Nodos con removeChild()
document.getElementById("removeChild").addEventListener("click",()=>{
    const contenedorV = document.getElementById("contenedorVacio");
    //Puedo eliminar el último elemento
    if(contenedorV.lastChild){
        contenedorV.removeChild(contenedorV.lastChild);
        alert("Último nodo eliminado con removeChild()");
    }else{
        alert("No tiene nodos para eliminar 'contenedorVacio'");
    }
    //Puedo eliminar todos los elementos
    //while(contenedorV.lastChild){
    //    contenedorV.removeChild(contenedorV.lastChild);
    //}
});

//ELIMINAR Nodos con remove() - Se elimina el nodo y sus hijos, nietos, etc...
document.getElementById("remove").addEventListener("click",()=>{
    const nodoEliminar = document.getElementById("parrafoExistente");
    if(nodoEliminar){
        nodoEliminar.remove();
        alert("El párrafoExistente eliminado con remove().");
    }else{
        alert("El nodo no existe.")
    }
});

//REEMPLAZAR Nodos con replaceChild()
document.getElementById("replaceChild").addEventListener("click",()=>{
   const contenedor = document.getElementById("contenedor");
   const nodoSustituir = document.getElementById("tituloAntiguo");
   if(nodoSustituir){
        //Creamos un nodo para reemplazarlo
        const nodoNuevo= document.createElement("h2");
        nodoNuevo.textContent = "Este es el nuevo título reemplazado.";

        //Reemplazamos 
        contenedor.replaceChild(nodoNuevo,nodoSustituir);
        alert("Nodo reemplazado con replaceChild()");
   }else{
        alert("No hay nodo para reemplazar.")
   }
});
//REEMPLAZAR Nodos con replaceWith()
document.getElementById("replaceWith").addEventListener("click",()=>{
    const nodoSustituir = document.getElementById("parrafoExistente");//Seleccionamos el nodo a reemplazar
    if(nodoSustituir){
        //Creamos el nodo que lo reemplazará
        const nuevoNodo = document.createElement("div");
        nuevoNodo.textContent = "Este es el nuevo nodo creado para el uso de replaceWith";
        nuevoNodo.style.color = "green";
        //Lo reemplazamos directamente sin acceder al padre
        nodoSustituir.replaceWith(nuevoNodo);
        alert("Nodo reemplazado con replaceWith()");
   }else{
        alert("No hay nodo para reemplazar.")
    }
});
