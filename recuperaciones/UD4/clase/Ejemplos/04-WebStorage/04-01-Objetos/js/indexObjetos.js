//Definimos un OBJETO en JavaScript
const usuario={
    nombre: "María",
    edad: 20,
    preferencias:{
        tema: "oscuro",
        idioma: "es"
    }
};

//Convertir el objeto a una cadena JSON y lo almacenamos
localStorage.setItem("usuario",JSON.stringify(usuario));

console.log(localStorage.getItem("usuario"));
//Recuperar
const infoGuardada = JSON.parse(localStorage.getItem("usuario"));



//Mostrar el objeto 
alert(infoGuardada.nombre);
alert(infoGuardada.edad);
alert(infoGuardada.preferencias.tema);