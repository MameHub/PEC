//COOKIES

//CREAR cookies con diferentes datos
document.cookie = "persona = Antonio"; //La cookie persona se creará sin duración específica (se eliminar cuando cerramos el navegador)
document.cookie = "usuario = María Ojeda; max-age=90"; //La cookie usuario se creará y durará 0,5 minutos
//Calculamos la fecha de mañana para que dure 1 día
let fecha = new Date();
fecha.setDate(fecha.getDate()+1); //Sumamos 1 día
//Convertimos la fecha a formato UTC
let fechaUTC = fecha.toUTCString();
document.cookie = "alumno = Carmen; expires=" + fechaUTC ;

var misCookies = document.cookie; //Recupera todas las coockies como una cadena de texto
alert(misCookies);

//MODIFICAR cookies existentes
document.cookie = "usuario = Pedro Navarro"; //Cambiamos el valor
misCookies = document.cookie; //Recupera todas las coockies como una cadena de texto
alert(misCookies);

//ELIMINAR una cookie
//Definimos una fecha de expiracion a 0
document.cookie = "usuario= ; max-age=0"; 
//document.cookie = "persona=; expires= "

misCookies = document.cookie; //Recupera todas las coockies como una cadena de texto
alert(misCookies);