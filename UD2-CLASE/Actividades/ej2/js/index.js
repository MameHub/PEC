// Variables
let ventanaNueva;

// 
window.name("Ventana secundaria");

// 
function abrirVentana(){
    ventanaNueva = window.open("","","width=200, height=200");
    ventanaNueva.document.write(`La ventana es de ${ventanaNueva.innerWidth}x${ventanaNueva.innerHeight}`);
    ventanaNueva.focus();
};

// 
function redimensionarVentana(){
    ventanaNueva.resizeBy(600,600); // resizeBy() escala la ventana [suma o resta el tamaño introducido por parámetro], para esto usar resizeTo().
    ventanaNueva.document.write(`Ventana redimensionada a ${ventanaNueva.innerWidth}x${ventanaNueva.innerHeight}`);
};

// 
function moverVentana(){
    ventanaNueva.moveTo(40,40);
};

// 
function cerrarVentana(){
    ventanaNueva.close();
};


/**********************************************************************************************************************************************************

// Código clase:
var ventana;

//Funciones
function crearVentana(){
    if(ventana==undefined) {
        ventana = open("", "ventana", "width=200,height=200");
        ventana.document.write("La ventana es de 200x200 píxeles");
    } else {
        alert("La ventana ya está abierta");
    }

}

function redimensionarVentana() {
    if(ventana!=undefined && !ventana.close) {
        ventana.resizeTo(600,600);
        ventana.focus();
        ventana.document.body.innerHTML = "La ventana redimensionada a 600x600 píxeles"; // Con inner machaca el texto y no añade como el write.
    } else {
        alert("La ventana NO está abierta");
    }
}

function moverVentana() {
    if(ventana!=undefined && !ventana.close()) {
        ventana.focus();
        ventana.moveBy(50,0);
    } else {
        alert("No hay ninguna ventana abieirta");
    }
}

function cerrarVentana() {
    if(ventana!=undefined && !ventana.close) {
        ventana.focus();
        ventana.close();
    } else {
        alert("No hay ninguna ventana abierta");
    }
}

**********************************************************************************************************************************************************/