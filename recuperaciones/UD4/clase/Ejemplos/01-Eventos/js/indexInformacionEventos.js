//manejador con un solo elemento
document.getElementById("eventos").addEventListener("mouseover", manejador);//Evento:mouseover, manjeador:manejador
document.getElementById("eventos").addEventListener("mouseout", manejador);
//asociamos un mismo manejador a dos elementos
document.getElementById("parrafo1").addEventListener("click", saludo);
document.getElementById("parrafo2").addEventListener("click", saludo);

//VAmos a ver el manejador a qué TIPO de evento está asociado
function manejador(e) {//El navegador crea un objeto de tipo evento
    
    switch (e.type) {//atributo que nos dice el tipo
    case "mouseover":
        this.style.color = "purple";//Cuando usas addEventListener para registrar un evento en un elemento, JavaScript asigna automáticamente el valor de this al elemento que dispara el evento cuando se llama a la función manejadora
        break;
    case "mouseout":
        this.style.color = "yellow";
        break;
    }
}

function saludo(e) {
//VAmos a ver el manejador a qué ELEMENTO está asociado
    if (e.target.id == "parrafo1") alert("Has pulsado el primer párrafo");
    else if (e.target.id == "parrafo2") alert("Has pulsado el segundo párrafo");

    alert("Has pulsado el " + e.target.id);
}
