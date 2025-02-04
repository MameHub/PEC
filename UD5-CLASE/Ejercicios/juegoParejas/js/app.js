//Definir variable globales del juego
let primeraCarta = null;
let segundaCarta = null;
let parejasEncontradas = 0; //Para saber que hemos encontrado todas las parejas
let tableroBloqueado = false; //Lo bloquearemos mientras se revisan las parejas

//Esperamos a que se cargue el contenido de la página 
document.addEventListener("DOMContentLoaded",() => {
    prepararPantalla();
});

//Función configurar la interfaz inicial del juego
const prepararPantalla = () => {
    //Cabecera del juego
    let cabecera = document.createElement("div");
    cabecera.setAttribute("id","cabecera");

    let titulo = document.createElement("h1");
    titulo.setAttribute("id","titulo");
    titulo.textContent = "JUEGO DE LAS PAREJAS";
    cabecera.appendChild(titulo);
    document.body.appendChild(cabecera);

    //Crear el contenedor del tablero
    let tablero = document.createElement("div");
    tablero.setAttribute("id","tablero");
    document.body.appendChild(tablero);

    //Botón para reiniciar la partida
    let botonReiniciar = document.createElement("input");
    botonReiniciar.setAttribute("id","botonReiniciar");
    botonReiniciar.setAttribute("type","button");
    botonReiniciar.setAttribute("value","Reiniciar partida");
    botonReiniciar.classList.add("botons");
    botonReiniciar.addEventListener("click",reiniciarJuego);
    document.body.appendChild(botonReiniciar);

    //Cuando ya cargo todos los elementos del HTML, barajo cartas...
    reiniciarJuego();
};

//Funcíón para iniciar o reiniciar el juego
const reiniciarJuego = () => {
    //Limpiamos las variables globales
    primeraCarta = null;
    segundaCarta = null;
    tableroBloqueado = false;
    parejasEncontradas = 0;

    //Generar 6 parejas (valores del 1 al 6)
    let valores = [];
    for (let i = 1; i <=6;i++){
        valores.push(i);
        valores.push(i);
    }//valores = [1,1,2,2,3,3,4,4,5,5,6,6]

    //Vamos a barajar aleatoriamente la lista de números
    valores.sort(()=>Math.random() - 0.5);
    //valores.sort((a,b) => a - b ); //Orden ascendente 
    //valores.sort((a,b) => b - a ); //Orden descendente

    //Preparamos el tablero
    let tablero = document.getElementById("tablero");
    tablero.innerHTML = "";//Limpiamos el tablero de las cartas que ya se estaban mostrando

    valores.forEach((valor)=>{
        //Creamos un contenedor por cada valor de la lista
        let carta = document.createElement("div");
        carta.classList.add("carta");
        carta.setAttribute("data-valor",valor);
        carta.textContent = "";
        carta.addEventListener("click",voltearCarta);
        tablero.appendChild(carta);
    });
};

//Función para voltear carta
const voltearCarta = (evento) => {
     //Tendremos que comprobar si el tablero está bloqueado para no dejar voltearCarta
    if (tableroBloqueado) return;

    let cartaSeleccionada = evento.target; //Obtenemos la carta clicada

    cartaSeleccionada.classList.add("volteada");
    cartaSeleccionada.textContent = cartaSeleccionada.getAttribute("data-valor");

    if(!primeraCarta){
        primeraCarta = cartaSeleccionada;
        return;//Termina
    }
    segundaCarta = cartaSeleccionada;
    tableroBloqueado = true;
    verificarPareja();
}; 

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
        //Comprobamos si ya ha econtrado todas las parejas
        if (parejasEncontradas == 6){
            mostrarMensaje("Felicidades!!","success");
        }
        //limpiamos las cartas almacenadas y el tablero li liberamos
        primeraCarta = null;
        segundaCarta = null;
        tableroBloqueado = false;
    }else{
    //No son pareja
    //Pasado un segundo limpio los DIVs
    setTimeout(() => {
        primeraCarta.classList.remove("volteada");
        segundaCarta.classList.remove("volteada");
        primeraCarta.textContent = "";
        segundaCarta.textContent = "";
        //limpiamos las cartas almacenadas y el tablero lo liberamos
        primeraCarta = null;
        segundaCarta = null;
        tableroBloqueado = false;
    }, 1000);
    }
    
};

// Función para mostrar un mensaje emergente usando SweetAlert2
const mostrarMensaje = (texto, icono) => {
    Swal.fire({
      position: "center",
      icon: icono,
      title: texto,
      showConfirmButton: true
    });
  };