//Seleccionamos todos los elementos del DOM
const titulo = document.getElementById("titulo");
const resultado = document.getElementById("resultado");
const btnReemplazarClases = document.getElementById("btnReemplazarClases");
const btnAgregarClase = document.getElementById("btnAgregarClase");
const btnQuitarClase = document.getElementById("btnQuitarClase");
const btnAlternarClase = document.getElementById("btnAlternarClase");
const btnVerificarClase = document.getElementById("btnVerificarClase");

//1. Reemplazar todas las clases usando className
btnReemplazarClases.addEventListener("click",()=>{
    titulo.className = "verde grande"; //es como poner HTML <h1 id="titulo" class="verde grande">Manipulando Clases en el DOM</h1>
    resultado.textContent = "Se han reemplazado las clases por 'verde grande'.";
});

//"2. Agregamos una clase usando classList.add"
btnAgregarClase.addEventListener("click",()=>{
    //Podríamos limpiar las clases que tenga anteriormente 
    //titulo.classList.remove("verde","grande");
    titulo.classList.add("rojo");
    resultado.textContent = "Se agregó la clase 'rojo'.";
});

//3.Quitar una clase usando classList.remove
btnQuitarClase.addEventListener("click",()=>{
    //Vamos a comprobar si previamente ya tenía una clase, rojo en este caso
    if (titulo.classList.contains("rojo")){//Coincidecia exacta
        //titulo.classList.includes("rojo")-> busca que esté este string, pero no coincidencia exacta
        titulo.classList.remove("rojo");
        resultado.textContent = "Se quitó la clase 'rojo'.";
    }else{
        resultado.textContent = "El título no tiene la clase 'rojo'.";
    }
});

//4. Alternar una clase usando classList.toggle
btnAlternarClase.addEventListener("click",()=>{
    //Vamos a alternar la clase resaltado, la grega si no está y la quita si sí está
    const estaResaltado = titulo.classList.toggle("resaltado"); //Lo cambia y devuelve true: si la clase "resaltado" e agrega en el elemento
    if (estaResaltado){
        resultado.textContent = "Se agregó la clase 'resaltado'.";
    }else{
        resultado.textContent = "Se eliminó la clase 'resaltado'.";
    }
});

//5. Verificar si ya tiene una clase classList.contains
btnVerificarClase.addEventListener("click",()=>{
    //Verificamos si título tiene la clase verde
    const tieneVerde = titulo.classList.contains("verde");
    if (tieneVerde){
        resultado.textContent = "El título tiene la clase verde.";
    }else{
        resultado.textContent = "El título NO tiene la clase verde.";
    }
});