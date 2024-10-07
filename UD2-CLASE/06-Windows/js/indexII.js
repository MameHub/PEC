/*
Eventos de tiempo.
- El objeto window permite ejecutar código en intervalos de tiempo.
- Hay tres métodos: setTimeout, clearTimeout, setInterval

    // setTimeout(<funcion>, <milisegundos>): se indica cuántos segundos
    tiene que pasar antes de que la función indicada en el primer parámetro se ejecute.

    // seInterval(<funcion>, <milisegundos>): repite una función cada intervalo de tiempo.
*/

// Saludo
function saludar(){
    alert("Hola");
}
function lanzarSaludo(){
    setTimeout(saludar,2000);
}
function lanzarSaludoVariable(){
    sal = setTimeout(saludar,4000);
}
function cancelarSaludo(){
    clearTimeout(sal)
}

// Cambio de color
let ventana = open("","ventana","height=200, width=200");
let intervalo;

function empezarColor(){
    ventana.focus();
    intervalo = setInterval(color,300);
}
function color(){
    if(ventana.document.body.bgColor=="pink"){
        ventana.document.body.bgColor="blue";
    } else{
        ventana.document.body.bgColor="pink";
    }
}
function pararColor(){
    clearInterval(intervalo);
}

// Reloj
var segundos = setInterval(reloj, 1000);
function reloj(){
    var fecha = new Date(); // Fecha actual
    document.getElementById("reloj").innerHTML = fecha.getSeconds();
}
function pararReloj(){
    clearInterval(segundos);
}
function arrancaReloj(){
    segundos = setInterval(reloj,1000);
}