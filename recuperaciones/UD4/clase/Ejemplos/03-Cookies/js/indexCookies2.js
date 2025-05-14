//Asociamos eventos al click
document.getElementById("verTodas").addEventListener("click",verTodas);
document.getElementById("crearCookie").addEventListener("click",crearCookie);
document.getElementById("borrarCookie").addEventListener("click",borrarCookie);
document.getElementById("modificarCookie").addEventListener("click",crearCookie); //Hacen lo mismo pero en este caso y existe
document.getElementById("leerCookie").addEventListener("click",leerCookie);
function verTodas() {
    alert(document.cookie);
}
function crearCookie(e){
    //Solicitar al usuario el nombre, valor y expiración de la cookie
    var nombre = prompt("Introduce el nombre de la cookie");

    //Qué botón ha llamado a la función
    const idElementoActivador = e.target.id;
    if (idElementoActivador == "crearCookie"){//Crearemos la cookie
    let existe = false;
        var cookies = document.cookie.split(";");//Dividimos las cookies en un array 
        for(c of cookies){
            c = c.trim();
            if(c.startsWith(nombre)){
                alert("No puedes crearla porque ya existe esta cookie...quizás quieres modificarla.");
                existe = true;
            }
        }
        if (!existe){
            var valor = prompt("Introduce el valor de la cookie");
            var dias = parseInt(prompt("Introduce el número de días para que expire"));//Lo convierto a entero para poder operar
            //Vamos a calcular cuándo va a expirar
            let fecha = new Date();
            fecha.setDate(fecha.getDate()+dias); //Sumamos X días
            //Convertimos la fecha a formato UTC
            let fechaUTC = fecha.toUTCString();
            document.cookie = nombre + "=" + valor + "; expires=" + fechaUTC;
        }
    }else{//Modificaremos la cookie

    }

    
}
function borrarCookie(){
    document.cookie = "nombre = ; max-age=0";
}
function leerCookie(){
    //Le pedimos al usuario un nombre de cookie que debe existir
    var nombre = prompt("Introduce el nombre de la cookie a consultar");
    var cookies = document.cookie.split(";");//Dividimos las cookies en un array 
    for(c of cookies){
        c = c.trim();
        if(c.startsWith(nombre)){
            alert(c);
        }
    }

}