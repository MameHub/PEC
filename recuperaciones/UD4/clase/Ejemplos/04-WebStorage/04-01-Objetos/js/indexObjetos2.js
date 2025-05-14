//Vamos a guardar el localStorage varios usuarios (objetos)
"use strict"
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let localidad = document.getElementById("localidad");
let lista = document.getElementById("listar");

//Añadimos las acciones
document.getElementById("CrearStorage").addEventListener("click",crear);
document.getElementById("ListarStorage").addEventListener("click",listar);

function crear(){
    let objeto = {
        nombre: nombre.value,
        edad: parseInt(edad.value),
        localidad: localidad.value
    }
    //Convertir el objeto a una cadena JSON y lo almacenamos
    objeto = JSON.stringify(objeto);
    localStorage.setItem("usuario"+(localStorage.length + 1),objeto);//Vamos incrementando/modificando el nombre usuario según el número de usuarios que ya tengamos almacenados

    for(let elemento of document.getElementsByTagName("input")){//Limpiamos los inputs
        elemento.value = "";
    }
}

function listar(){
    lista.innerHTML = "";
    //Recorremos todo lo que está almacenado en localStorage 
    for(let i=0; i < localStorage.length ;i++){
        let objeto = localStorage.getItem("usuario" + (i+1));
        objeto = JSON.parse(objeto);//pasear a JSON
        lista.innerHTML += `Nombre=${objeto.nombre} - Edad=${objeto.edad} - Localidad=${objeto.localidad}<br>`
    }
}