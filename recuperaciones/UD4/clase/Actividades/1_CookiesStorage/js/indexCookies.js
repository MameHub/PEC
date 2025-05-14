//Esperar a que se cargue la página entera
window.addEventListener("load",() =>{
    //Leer las cookies, "nombre" y "color" si existen
    const nombre = leerCookie("nombre");
    const color = leerCookie("color");

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

    crearCookie("nombre",nombre);
    crearCookie("color",color);

//Actualizamos la página a estos datos de usuario
    //Cambiamos el fondo a ese color
    document.body.style.background = color;
    //Saludamos al usuario
    document.getElementById("mensaje").innerText = `Bienvenido, ${nombre}!`;
    //Ocultamos el formulario
    document.getElementById("formulario").style.display = "none";

});

function leerCookie(nombre){
    //Dividir las cookies según el delimitador "; "
    const cookies = document.cookie.split("; ");
    for(let cookie of cookies){
        //Dividir la cookie en clave y valor
        const [clave, valor] = cookie.split("=");
        
        //Comprobamos si conincide la clave con la que nos han pasado
        if (clave == nombre){
            return valor;
        }
    }
    //Si no encuentra esa clave de cookie, devuelvo null
    return null;
}

function crearCookie(nombre, valor){

    document.cookie = `${nombre}=${valor};`;

}