


//Verificamos si las dos caras seleccionadas son la misma
const verificarPareja = () => {
    let valor1 = primeraCarta.getAttribute("data-valor");
    let valor2 = segundaCarta.getAttribute("data-valor");

    if(valor1 == valor2){
    //Son pareja
        //Elimino el evento click de esas dos cartas
        primeraCarta.removeEventListener("click",voltearCarta);
        segundaCarta.removeEventListener("click",voltearCarta);
        //Aumento el contador de parejas encontradas 
        parejasEncontradas ++;
        //Comprobamos si ya ha encontrado todas las parejas
        if(parejasEncontradas == 6) {
            mostrarMensaje("Felicidades!!","success");
        }
    else{
        //No son pareja
        //Pasando un segundo limpio los DIVs
        setTimeout(() => {
            primeraCarta.classList.remove("volteada");
            segundaCarta.classList.remove("volteada");
            primeraCarta.textContent = "";
            segundaCarta.textContent = "";
            primeraCarta = null;
            segundaCarta = null;
        }, 1000);
    }
    }
}

//Función para mostrar un mensaje emergende usando SweetAlert2
const mostrarMensaje = (texto, icono) => {
    Swal.file({
        position: "center",
        
    })
}