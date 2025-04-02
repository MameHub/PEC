//ASOCIAMOS EL MISMO MANEJADOR AL MISMO ELEMENTO CON DISTINTOS EVENTOS.
document.getElementById("eventos").addEventListener("mouseover", manejador); //La llamada a la función/manejador es sin paréntesis. Si se ponen paréntesis se ejecuta nada más ejecutarse el archivo en vez de esperarse a que se de el evento deseado, en este caso "mouseover".
document.getElementById("eventos").addEventListener("mouseout", manejador);
// document.getElementById("eventos").addEventListener("click", manejador);
document.getElementById("parrafo1").addEventListener("click", saludo);
document.getElementById("parrafo2").addEventListener("click", saludo);
//PODEMOS USAR FUNCIONES ANÓNIMAS 
document.getElementById("eventos").addEventListener("click",function(){
    this.style.color = "pink";
});

//De forma nativa se pasán todos lo parámetros.
//ASOCIAMOS EL MISMO MANEJADOR A DISTINTOS ELEMENTOS.
function  manejador(e) {
    //Tendrá que controlar qué evento es el que ha ocurrido.
    switch (e.type) {
        case "mouseover":
            this.style.color = "purple"; //Cuando usamos "addEventListener" para registrar un evento en un elemento, JS asigna automáticamente el valor this a ese elemento.
            break;
        case "mouseout":
            this.style.color = "black";
            break;
        case "click":
            this.style.color = "orange";
            break;
        }
}

// function  manejador2 () {
//     this.style.color = "black"; //Cuando usamos "addEventListener" para registrar un evento en un elemento, JS asigna automáticamente el valor this a ese elemento.
// }

function saludo(e) { //Qué elemento es el que me ha llamado
    if (e.target.id == "parrafo1") {
        alert("Hola! has pulsado el párrafo 1");
        //Eliminar eventos
        this.removeEventListener("click",saludo);
    } else if (e.target.id == "parrafo2") {
        alert("Hola! has pulsado el párrafo 2");
    }
}