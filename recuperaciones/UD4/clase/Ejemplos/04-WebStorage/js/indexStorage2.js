//TRABAJAMOS CON LOCAL Y SESSION 

//Comprobamos que el navegador soporta webstorage
if(typeof(Storage) !== "undefined"){
    //Llamar al contador
    contador();
    //Saludar
    saludar();
    

//Añadimos un evento para cerrar sesión al hacer clic en el botón log out
document.getElementById("logout").addEventListener("click", logout);
//Añadir un evento para incrementar el contador
document.getElementById("incrementar").addEventListener("click",incrementar);
//Añadir un evento para decrementar el contador
document.getElementById("decrementar").addEventListener("click",decrementar);

function saludar(){
    if(localStorage.getItem("usuario")!=null){//Ya está logeado
        document.getElementById("saludo").innerHTML = "¡Bienvenido/a de nuevo, " + localStorage.getItem("usuario") + "!";
    }else{//Es la primera vez que entra o a hecho log out
        localStorage.setItem("usuario",prompt("Cómo te llamas?")); //Recoerdamos que le paso a setItem -> ("clave","valor")
        document.getElementById("saludo").innerHTML = "Hola! es tu primera visita, "+ localStorage.getItem("usuario") + "!";
    }
}

function contador(){
    //Comprobar si ya existe un contador en sessionStorage
    if(!sessionStorage.getItem("contador")){//Si  no existe
        sessionStorage.setItem("contador","0");
    }
    document.getElementById("contador").innerHTML = "Contador: " + sessionStorage.getItem("contador");
}
function incrementar(){
    sessionStorage.setItem("contador", Number(sessionStorage.getItem("contador")) +  1 );//Es conveniente convertirlo a número
    //Actualizar la página
    document.getElementById("contador").innerHTML = "Contador: " + sessionStorage.getItem("contador");
}

function decrementar(){
    sessionStorage.setItem("contador", Number(sessionStorage.getItem("contador")) -  1 );//Es conveniente convertirlo a número
    //Actualizar la página
    document.getElementById("contador").innerHTML = "Contador: " + sessionStorage.getItem("contador");
}

function logout(){
    //Despedirnos del usuario
    alert("Se ha cerrado sesión de "+ localStorage.getItem("usuario"));

    //Eliminamos el usuario del localStorage
    localStorage.removeItem("usuario");

    //Borrar el saludo del párrafo
    document.getElementById("saludo").innerHTML ="No has iniciado sesión";
}

}else{
    alert("El navegador no soporta WebStorage");
}