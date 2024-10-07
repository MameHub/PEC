// Propiedades
var texto = "";

// onLine
texto += "<br/>Online: "+navigator.onLine;
// languaje: idioma del navegador
texto += "<br/>Idioma: "+navigator.language;
// coolieEnabled
texto += "<br/>Cookies: "+navigator.cookieEnabled;

document.getElementById("ventanaPpal").innerHTML = texto;