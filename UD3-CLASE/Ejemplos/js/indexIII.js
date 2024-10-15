let mensaje = "variable global";

const mostrar = function(){
    let mensaje = "variable local";
    var nombre = "María";
    console.log(mensaje,nombre);
}

mostrar();
console.log({mensaje});
// console.log({nombre}); ERROR