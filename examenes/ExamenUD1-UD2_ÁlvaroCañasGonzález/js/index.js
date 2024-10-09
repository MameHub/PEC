// Variables
let ventana, edad, fecha, interval;

// Obtenemos la fecha actual.
fecha = new Date();

// 
function mayorEdad() {
    // Obtenemos la fecha de nacimientos del usuario.
    edad = prompt("Introduzca su fecha de nacimiento: ");
    // Obtenemos la edad por año.
    // if(fecha.getFullYear() - edad) {
        // Comprobamos la edad por mes y día.
        // if() {
            alert("Tienes más de 16 años. Puedes ver la serie!!");
        // } else {
            alert("Tienes menos de 16 años, aún debes esperar para ver la serie :(");
        // }
    // }
}

// 
interval = setInterval(cambioColor(), 500);
// Función con el cambio de color cada medio segundo.
function cambioColor(color1, color2) {
    if(ventana.screen.colorDepth.toString(color1)) {
        ventana.screen.colorDepth.toString(color2);
    } else {
        ventana.colorDepth(color1);
    }
}

// 
function casa1() {
    ventana = window.open("", "Casa Targaryen", "width = 500, height = 500");
    // Cambiamos el color de la ventana.
    cambioColor(rojo, negro);
}

// 
function casa2() {
    ventana = window.open("", "Casa Velaryon", "width = 500, height = 500");
    // Cambiamos el color de la ventana.
    cambioColor(silver, navy);
}

// 
function casa3() {
    ventana = window.open("", "Casa Hightower", "width = 500, height = 500");
    // Cambiamos el color de la ventana.
    cambioColor(white, green);
}

// 
function casa4() {
    ventana = window.open("", "Casa Strong", "width = 500, height = 500");
    // Cambiamos el color de la ventana.
    cambioColor(blue, brown);
}

// 
function casa5() {
    ventana = window.open("", "Casa Lannister", "width = 500, height = 500");
    // Cambiamos el color de la ventana.
    cambioColor(red, gold);
}

// 
function casa6() {
    ventana = window.open("", "Casa Baratheon", "width = 500, height = 500");
    // Cambiamos el color de la ventana.
    cambioColor(black, gold);

}

// Cerramos la ventana si esta abierta.
function cerrar() {
    if(ventana != undefined && !ventana.close()) {
        ventana.close();
    } else {
        alert("No hay ninguna ventana abierta.");
    }
}