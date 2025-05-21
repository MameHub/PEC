//DOS JUGADORES
"use strict";

// Definimos el palo de la baraja y la variable para la partida
let palos = ["oros", "espadas", "bastos", "copas"];
let valores = [1, 2, 3, 4, 5, 6, 7, "sota", "caballo", "rey"];
let partida; // Variable para almacenar la instancia del juego
let turnoActual = 1; // Controlar el turno del jugador (1 o 2)

// Clase Juego para representar una partida
class Juego {
  constructor() {
    this.baraja = []; // Baraja del juego
    this.cuentas = { 1: 0, 2: 0 }; // Puntuación de cada jugador
    this.inicio = false; // Indica si la partida está activa
  }
}

// Evento que se ejecuta cuando el contenido de la página se carga completamente
document.addEventListener("DOMContentLoaded", () => {
  prepararPantalla(); // Prepara la estructura inicial de la página
});

// Función para configurar la interfaz inicial del juego
const prepararPantalla = () => {
  // Crear un contenedor para la cabecera
  let cabecera = document.createElement("div");
  cabecera.setAttribute("id", "cabecera");

  // Crear el título del juego
  let nodo = document.createElement("h1");
  nodo.setAttribute("id", "titulo");
  nodo.textContent = "SIETE Y MEDIA - DOS JUGADORES";
  cabecera.appendChild(nodo);

  // Crear el contenedor del tablero
  let tablero = document.createElement("div");
  tablero.setAttribute("id", "tablero");

  // Crear elementos para el jugador 1
  crearControlesJugador(tablero, 1);

  // Crear elementos para el jugador 2
  crearControlesJugador(tablero, 2);

  // Botón para iniciar la partida
  let btnIniciar = document.createElement("input");
  btnIniciar.setAttribute("id", "btnIniciar");
  btnIniciar.setAttribute("type", "button");
  btnIniciar.setAttribute("value", "Iniciar partida");
  btnIniciar.classList.add("botons", "botonsInicio");
  btnIniciar.addEventListener("click", iniciarJuego);

  // Añadir elementos al documento
  document.body.appendChild(cabecera);
  document.body.appendChild(tablero);
  document.body.appendChild(btnIniciar);
};

// Función para crear los controles de cada jugador
const crearControlesJugador = (tablero, jugador) => {
  let contenedorJugador = document.createElement("div");
  contenedorJugador.setAttribute("id", `jugador${jugador}`);
  contenedorJugador.classList.add("jugador");

  // Crear tapete para el jugador
  let tapete = document.createElement("div");
  tapete.setAttribute("id", `tapete${jugador}`);
  tapete.classList.add("tapete");
  contenedorJugador.appendChild(tapete);

  // Crear botones para el jugador
  let capaBotones = document.createElement("div");
  capaBotones.setAttribute("id", `botonera${jugador}`);

  let btnCarta = document.createElement("input");
  btnCarta.setAttribute("id", `btnCarta${jugador}`);
  btnCarta.setAttribute("type", "button");
  btnCarta.setAttribute("value", "Pedir carta");
  btnCarta.classList.add("botons");
  btnCarta.disabled = true;

  let btnTerminar = document.createElement("input");
  btnTerminar.setAttribute("id", `btnTerminar${jugador}`);
  btnTerminar.setAttribute("type", "button");
  btnTerminar.setAttribute("value", "Terminar");
  btnTerminar.classList.add("botons");
  btnTerminar.disabled = true;

  capaBotones.appendChild(btnCarta);
  capaBotones.appendChild(btnTerminar);
  contenedorJugador.appendChild(capaBotones);

  tablero.appendChild(contenedorJugador);
};

// Función para iniciar el juego
const iniciarJuego = () => {
  limpiarTapete(1);
  limpiarTapete(2);

  if (partida == undefined || partida.inicio == false) {
    console.log("Iniciando el juego");
    partida = new Juego();
    // Generar la baraja española con los nombres correctos
    partida.baraja = [];
    palos.forEach((palo) => {
      valores.forEach((valor) => {
        partida.baraja.push({ valor, palo }); // Almacenar como objeto { valor, palo }
      });
    });
    barajar();
    partida.inicio = true;
    console.log(partida.baraja);
    

    // Habilitar los botones del jugador 1 (comienza el turno)
    document.querySelector(`#btnCarta1`).disabled = false;
    document.querySelector(`#btnTerminar1`).disabled = false;

    // Añadir eventos a los botones de cada jugador
    document.querySelector(`#btnCarta1`).addEventListener("click", () => pedirCarta(1));
    document.querySelector(`#btnTerminar1`).addEventListener("click", () => terminarPartida(1));

    document.querySelector(`#btnCarta2`).addEventListener("click", () => pedirCarta(2));
    document.querySelector(`#btnTerminar2`).addEventListener("click", () => terminarPartida(2));
  }
};

// Función para barajar las cartas
const barajar = () => {
  console.log("Barajando...");
  partida.baraja.sort(() => Math.random() - 0.5);
};

// Función para pedir una carta
const pedirCarta = (jugador) => {
  if (jugador !== turnoActual) return; // Solo permite al jugador actual pedir carta

  let cartaExtraida = partida.baraja.pop(); // Extraer una carta (objeto con valor y palo)
  let { valor, palo } = cartaExtraida; // Extraer propiedades del objeto

  let imagen = document.createElement("img");
  imagen.classList.add("carta");
  
  if (isNaN(valor)) {
    partida.cuentas[jugador] += 0.5;
  } else {
    partida.cuentas[jugador] += valor;
  }

  // Construir la ruta de la imagen según el formato recomendado
  let rutaImagen = `img/cartas/${valor}_${palo}.jpg`;
  imagen.setAttribute("src", rutaImagen);
  imagen.setAttribute("alt", `Carta ${valor} de ${palo}`);

  // Agregar la imagen de la carta al tapete del jugador
  document.getElementById(`tapete${jugador}`).appendChild(imagen);

  if (partida.cuentas[jugador] > 7.5) {
    mensaje(`Jugador ${jugador} ha perdido`, "error");
    finalizarTurno(jugador);
  } else if (partida.cuentas[jugador] === 7.5) {
    mensaje(`Jugador ${jugador} ha ganado`, "success");
    finalizarTurno(jugador);
  }
};

// Función para terminar la partida de un jugador
const terminarPartida = (jugador) => {
  if (partida.cuentas[jugador] < 4) {
    mensaje("No puedes terminar con menos de 4 puntos", "warning");
  } else {
    mensaje(`Jugador ${jugador} terminó con ${partida.cuentas[jugador]} puntos`, "info");
    finalizarTurno(jugador);
  }
};

// Finalizar el turno del jugador y pasar al siguiente
const finalizarTurno = (jugador) => {
  document.querySelector(`#btnCarta${jugador}`).disabled = true;
  document.querySelector(`#btnTerminar${jugador}`).disabled = true;

    if (jugador === 1) {
        turnoActual = 2;
         // Cambiar el turno al otro jugador
        document.querySelector(`#btnCarta${turnoActual}`).disabled = false;
        document.querySelector(`#btnTerminar${turnoActual}`).disabled = false;
    } else {
      //Ha terminado el jugador 2, se termina el juego
        turnoActual = 0;
        ganador();
    }

};

// Función para limpiar el tapete
const limpiarTapete = (jugador) => {
  let tapete = document.getElementById(`tapete${jugador}`);
  while (tapete.firstChild) {
    tapete.removeChild(tapete.firstChild);
  }
};
function ganador() {
  let puntosJugador1 = partida.cuentas[1];
  let puntosJugador2 = partida.cuentas[2];

  let mensajeResultado = "";

  // Comprobar si alguno de los jugadores se ha pasado de 7.5 puntos
  if (puntosJugador1 > 7.5 && puntosJugador2 > 7.5) {
      mensajeResultado = "¡Ambos jugadores se pasaron! No hay ganador.";
  } else if (puntosJugador1 > 7.5) {
      mensajeResultado = "¡Jugador 2 gana! Jugador 1 se pasó de 7.5.";
  } else if (puntosJugador2 > 7.5) {
      mensajeResultado = "¡Jugador 1 gana! Jugador 2 se pasó de 7.5.";
  } else {
      // Ambos jugadores están dentro del límite, gana el que esté más cerca de 7.5
      let distanciaJugador1 = 7.5 - puntosJugador1;
      let distanciaJugador2 = 7.5 - puntosJugador2;

      if (distanciaJugador1 < distanciaJugador2) {
          mensajeResultado = "¡Jugador 1 gana! Está más cerca de 7.5.";
      } else if (distanciaJugador2 < distanciaJugador1) {
          mensajeResultado = "¡Jugador 2 gana! Está más cerca de 7.5.";
      } else {
          mensajeResultado = "¡Empate! Ambos jugadores están a la misma distancia de 7.5.";
      }
  }

  // Mostrar el mensaje del resultado
  mensaje(mensajeResultado, "info");
}


// Función para mostrar un mensaje emergente
const mensaje = (texto, icono) => {
  Swal.fire({
    position: "bottom-end",
    icon: icono,
    title: texto,
    showConfirmButton: false,
    timer: 2500,
  });
};
