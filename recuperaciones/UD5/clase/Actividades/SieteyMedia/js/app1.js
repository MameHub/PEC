//UN JUGADOR
"use strict"
//Definimos las cartas que tiene la baraja
let cartas = [1,2,3,4,5,6,7,"Sota","Caballo","Rey"];
let partida; //Varialbe para almacenar la instancia del juego

class Juego{
    constructor(){
        this.baraja = [];
        this.cuenta = 0;
        this.inicio = false;
    }
}
//Evento que se ejecuta cuando el contenido de la página se carga completamente
document.addEventListener("DOMContentLoaded",()=>{
    prepararPantalla();//Preparamos la estructura incial de la pantalla
});

const prepararPantalla =()=>{
    //Creamos contenedor para la cabecera
    let cabecera = document.createElement("div");
    cabecera.setAttribute("id","cabecera");
        //Creamos el título del juego
        let titulo = document.createElement("h1");
        titulo.setAttribute("id","titulo");
        titulo.textContent = "Juego SIETE y MEDIA";
        cabecera.appendChild(titulo);//Añadimos el H1 al DIV de cabecera

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
    btnCarta.addEventListener("click",pedirCarta);
    btnCarta.disabled = true; //Deshabilitamos el botón de pedir al inicio

    //Botón terminar partida
    let btnTerminar = document.createElement("input");
    btnTerminar.setAttribute("id","btnTerminar");
    btnTerminar.setAttribute("type","button");
    btnTerminar.setAttribute("value","Me planto");
    btnTerminar.classList.add("botons");
    btnTerminar.addEventListener("click",terminar);
    btnTerminar.disabled = true; //Deshabilitamos el botón de pedir al inicio

    //Añadimos los botones al DIV de botonera
    botonera.appendChild(btnCarta);
    botonera.appendChild(btnTerminar);

    //Añadimos el tapete y la botonera al tablero
    tablero.appendChild(tapete);
    tablero.appendChild(botonera);
}
function iniciarJuego(){
    //Limpiar el tapete por si ya ha jugado antes
    limpiarTapete();
    console.log("Inciando juego");
    partida = new Juego();

    partida.baraja = [...cartas, ...cartas, ...cartas,...cartas];
    barajar();//Mezclar las cartas
    partida.inicio = true;

    //Habilitamos los botones de juego
    document.querySelector("#btnCarta").disabled = false;
    document.querySelector("#btnTerminar").disabled = false;
}
function barajar(){
    console.log("Barajando...");
    let barajaOriginal = [...partida.baraja]; //Copiamos la baraja original
    let barajaMezclada = []; //Iremos añadiendo cartas random

    while (barajaOriginal.length > 0){
        //Generamos un índice aleatorio dentro del rango de la baraja
        let indiceAleatorio = Math.floor(Math.random() * barajaOriginal.length);
        //Extraemos el elemento de esa posición para agregarlo a la baraja mezclada
        let carta = barajaOriginal.splice(indiceAleatorio,1)[0];//OJO que splie devuelve un array, y yo quiero el elemento,por eso -> [0]
        barajaMezclada.push(carta);
    }
    partida.baraja = barajaMezclada;//Al atributo  'baraja' del objeto 'partida' cargo las cartas barajadas de forma aleatoria 
    console.log(partida.baraja);
}
function pedirCarta(){
    let carta = document.createElement("div");
    carta.classList.add("carta");
    let valor = partida.baraja.pop();//tomamos una carta, la útlima
    if(isNaN(valor)){
        partida.cuenta += 0.5; //El valor de una figura:sota, caballo y rey
    }else{
        partida.cuenta += valor;
    }
    //Mostramos la carta en el tapete
    carta.textContent = valor;
    document.getElementById("tapete").appendChild(carta);
    //Voy viendo qué cartas quedan en la baraja
    console.log(partida.baraja);
    console.log("Cuenta: "+ partida.cuenta);

    //Vamos a comprobar si ya se ha pasado o puede seguir pidiendo cartas
    if(partida.cuenta > 7.5){
        mensaje("Has perdido","error");
        //Desactivamos los botones, para que no pueda ni pedir carta, ni terminar partida con el botón
        document.getElementById("btnCarta").disabled = true;
        document.querySelector("#btnTerminar").disabled = true;
        partida.inicio = false;
    }else if (partida.cuenta == 7.5){
        mensaje("Has ganado","success");
        //Desactivamos los botones, para que no pueda ni pedir carta, ni terminar partida con el botón
        document.getElementById("btnCarta").disabled = true;
        document.querySelector("#btnTerminar").disabled = true;
        partida.inicio = false;
    }
    
}
function limpiarTapete(){
    let tapete = document.querySelector("#tapete");
    if(tapete != null){
        while(tapete.firstChild){//Que tiene un hijo al menos
            tapete.removeChild(tapete.firstChild);
        }
    }
}
function terminar(){
    if(partida.cuenta < 5){
        mensaje("No puedes terminar la partida con menos de 5 puntos","warning");
    }else{
        console.log("Has conseguido una puntuación final de "+partida.cuenta+" puntos.");
        partida.inicio = false;
        partida.cuenta = 0;
        limpiarTapete();
        //Desactivamos los botones, para que no pueda ni pedir carta, ni terminar partida con el botón
        document.getElementById("btnCarta").disabled = true;
        document.querySelector("#btnTerminar").disabled = true;
        
    }
}
const mensaje = (texto, icono) => {
    Swal.fire({
        position: "bottom-end",
        icon: icono,
        title: texto,
        showConfirmButtoon: false,
        timer:2500,
    });
}