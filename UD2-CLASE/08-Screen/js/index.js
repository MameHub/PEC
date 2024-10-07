// Propiedades
var texto = "";

// Tamaño de la pantalla
texto += "<br/>Ancho: "+screen.width;
texto += "<br/>Alto: "+screen.height;

// Tamaño de la pantalla sin barra de tareas
texto += "<br/>Ancho sin barra: "+screen.availWidth;
texto += "<br/>Alto sin barra: "+screen.availHeight;

// Profundidad de color de la pantalla (bits x píxeles)
texto += "<br/>Profundidad: "+screen.colorDepth;

// Resolución de color (bits x píxel)
texto += "<br/>Resolución: "+screen.pixelDepth;

document.getElementById("ventanaPpal").innerHTML = texto;