//Esperar a que se cargue la página entera
window.addEventListener("load",() =>{
    //Leer localStorage
    const nombre = localStorage.getItem("nombre");
    const color = localStorage.getItem("color");

    //Si existen las dos cookies, personalizamos la página
    if(nombre && color){
        //Cambiamos el fondo a ese color
        document.body.style.background = color;
        //Saludamos al usuario
        document.getElementById("mensaje").innerText = `Bienvenido, ${nombre}!`;
        //Ocultamos el formulario
        document.getElementById("formulario").style.display = "none";
    }else{
        document.getElementById("mensaje").innerText ="Por favor, completa el formulario";
    }
});
//Evento al botón enviar
document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();//Evita que se envíen datos y regargue la página

    const nombre = document.getElementById("nombre").value;
    const color = document.getElementById("color").value;

    //Asegurarnos que el nombre está completo
    if(!nombre){
        alert("Por favor, introduce un nombre");
        return;
    }
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("color",color);

//Actualizamos la página a estos datos de usuario
    //Cambiamos el fondo a ese color
    document.body.style.background = color;
    //Saludamos al usuario
    document.getElementById("mensaje").innerText = `Bienvenido, ${nombre}!`;
    //Ocultamos el formulario
    document.getElementById("formulario").style.display = "none";

});