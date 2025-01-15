//Vamos a guardar el localStorage varios usuarios (objetos)
"use strict"
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let localidad = document.getElementById("localidad");

//Añadimos las acciones
document.getElementById("CrearStorage").addEventListener("click",crear);

function crear(){
    let objeto = (
        nombre:nombre.value,
        edad: parseInt(edad.value,
        localidad: localidad.value
    )
    //Convertir el objeto a una cadena JSON y lo almacenamos.
    objeto = JSON.stringify(objeto);
    localStorage.setItem("usuario"+localStorage.length + 1), objeto);

    function listar(){
        listar.innerHTML = "";
        //Recorremos todo lo que está almacenado en localStorage´
        for (let i = 0; i < localStorage.length; i++) {
            let objeto = localStorage.getItem("usuario" + (i+1));
            objeto = JSON.parse(objeto);//pasear a JSON
            listar.innerHTML+='nombre${objeto.nombre} - edad${objeto.edad} - localidad=${objeto.localidad}<br>'
        }
    }
}