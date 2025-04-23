window.onload = iniciar;

function iniciar(){

    document.getElementById("verTodas").addEventListener("click",verTodas);
    document.getElementById("crearCookie").addEventListener("click",crearCookie);
    document.getElementById("modificarCookie").addEventListener("click",modificarCookie);
    document.getElementById("leerCookie").addEventListener("click",leerCookie);
    document.getElementById("borrarCookie").addEventListener("click",borrarCookie);

}

function verTodas(){
    alert(document.cookie);
}

function crearCookie(){
    const clave = prompt("Introduce el nombre de la cookie");
    const valor = prompt("Introduce el valor de la cookie");
    const dias = parseInt(prompt("Introduce el número de días para que expire")); //Lo tengo que convertir a entero

    document.cookie = clave + "=" + valor;

}

function modificarCookie(){
    const clave = prompt("Introduce el nombre de la cookie a modificar");
    const cookies = document.cookie.split(";");//Dividimos las cookies en un array
    let existe = false;
    for(c of cookies){
        c = c.trim();//Eliminamos espacios en blanco
        if(c.startsWith(clave + "=")){
            existe = true;
            break;
        }
    }

    if(existe){
        const nuevoValor = prompt("Introduce el nuevo valor de la cookie");
        document.cookie = clave + "=" + nuevoValor;
        alert("La cookie ha  sido modificada");
    }
    
    else{
        alert("La cookieno existe, no se puede modificar");
    }
}

function borrarCookie(){
    const claveBorrar = prompt("Introduce la cookie a borrar");
    document.cookie = claveBorrar + "=; max-age=0";
    alert("Cookie borrada");
}

function leerCookie(){
    const clave = prompt("Inroduce la cookie que quieres mostrar");
    const cookies = document.cookie.split(";");//Dividimos las cookies en un array
    for(c of cookies){
        c = c.trim();//Eliminamos espacios en blanco
        if(c.startsWith(clave + "=")){
            alert(c);
        }
    }
}

function almacenarJSON() {
    // Definimos el objeto JS
    const alumno = {
        nombre: "María",
        edad: 20,
        preferencias: {
            tema: "oscuro",
            idioma: "es"
        }
    };

    //Covnertir el objeto a una cadena JSON.
    const alumnoJSON = JSON.stringify(alumno);

    // Establecer la cookie con el JSON.
    document.cookie = "alumno=" + alumnoJSON;
    const cookies = document.cookie.split(";");
    for (const c of cookies) {
        c = c.trim();//Eliminamos espacios en blanco.
        if (c.startsWith("alumno")) {
            alumnoCookie = JSON.parse((c.substring("alumno=".length)));
            break;
        }
    }

    if (alumnoCookie) {
        alert(alumnoCookie.nombre);
        alert(alumnoCookie.edad);
        alert(alumnoCookie.preferencias.tema);
    }

}