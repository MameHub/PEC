"use strict"
//Definimos las cartas que tiene la baraja
let cartas = [1,2,3,4,5,6,7,"sota","caballo","rey"];
let partida; //Variable para almacenar la instacia del juego.

class Juego{
    constructor(){
        this.baraja = [];
        this.cuenta = 0;
        this.inicio = false;
    }
}
//Evento que se ejecuta cuando el contenido de la página se carga completamente
document.addEventListener("DOMContentLoaded",()=>{
    prepararPantalla();//Preparamos la estructura inicial de la pantalla.
});

const prepararPantalla = ()=>{
    //Creamos un contenedor para la cabecera
    let cabecera = document.createElement("div");
    cabecera.setAttribute("id","cabecera");
        //Creamos el título del juego
        let titulo = document.createElement("h1");
        titulo.setAttribute("id","titulo");
        titulo.textContent = "Juego SIETE Y MEDIA"
        cabecera.appendChild(titulo);//Añadimos el H1 al DIV de cabecera.

    //Creamos el contenedor para el tablero
    let tablero = document.createElement("div");
    tablero.setAttribute("id","tablero");

    //Botón iniciar partida
    let btnIniciar = document.createElement("input");
    btnIniciar.setAttribute("id","btnIniciar");
    btnIniciar.setAttribute("type","button");
    btnIniciar.setAttribute("value","Iniciar partida");
    btnIniciar.classList.add("botons","botonsInicio");
    btnIniciar.addEventListener("click",iniciarJuego);

    //Añadimos estos elementos al cuerpo del documento
    document.body.appendChild(cabecera);
    document.body.appendChild(tablero);
    document.body.appendChild(btnIniciar);

    //Crear el tapete donde irán las cartas
    let tapete = document.createElement("div");
    tapete.setAttribute("id","tapete");
    tapete.classList.add("tapete");
    //Creamos los botones de acciones para jugar
    let botonera = document.createElement("div");
    botonera.setAttribute("id","botonera");

    //Botón pedir carta
    let btnCarta = document.createElement("input");
    btnCarta.setAttribute("id","btnCarta");
    btnCarta.setAttribute("type","button");
    btnCarta.setAttribute("value","Dame carta");
    btnCarta.classList.add("botons");
    // btnCarta.addEventListener("click",pedirCarta);
    btnCarta.disabled = true; //Deshabilitamos el botón de pedir al inicio

    //Botón temrinar partida
    let btnTerminar = document.createElement("input");
    btnTerminar.setAttribute("id","btnTerminar");
    btnTerminar.setAttribute("type","button");
    btnTerminar.setAttribute("value","Me planto");
    btnTerminar.classList.add("botons");
    // btnTerminar.addEventListener("click",terminar);
    btnTerminar.disabled = true; //Deshabilitamos el botón de pedir al inicio

    //Añadimos los botones DIV de botonera
    botonera.appendChild(btnCarta);
    botonera.appendChild(btnTerminar);

    //Añadimos el tapete y la botonera al tablero
    tablero.appendChild(tapete);
    tablero.appendChild(botonera);
}
function iniciarJuego(){
    console.log("Iniciar juego");
    partida = new Juego();

    partida.baraja = [...cartas, ...cartas, ...cartas, ...cartas];
    barajar();//Mezclar las cartas
    partida.inicio = true;

    //Habilitamos los botones de juego
    document.querySelector("#btnCarta").disabled = false;
    document.querySelector("#btnTerminar").disabled = false;
}
function barajar(){
    console.log("Barajando...");
    let barajaOriginal = [...partida.baraja]; //Copiamos la baraja original
    let barajoMezclada = []; //Iremos añadiendo cartas random

    while (barajaOriginal.length > 0){
        //Generamos un índice aleatorio dentro dle rango de la baraja
        let indiceAleatorio = Math.floor(Math.random() * barajaOriginal.length);
        //Extraemos el elemento de esa posición para agregarlo a la baraja mezclada.
        let carta = barajaOriginal.splice(indiceAleatorio,1)[0]; //OJO que splice devuelve un array, y yo quiero el elemento, por eso -> [0]
        barajoMezclada.push(carta);
    }
    partida.baraja = barajoMezclada;
    console.log(partida.baraja);
}