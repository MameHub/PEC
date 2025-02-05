"use strict"
let aBarcos = [];
let aciertos = 0;
let intentos = 0;

document.addEventListener("DOMContentLoaded",() => {
    crearTitulo();
    crearFormulario();
});
const crearTitulo = () => {
    const titulo = document.createElement("h3");
    titulo.textContent = "Juego de barcos";
    document.body.appendChild(titulo);
};

const crearFormulario = () => {
    const formulario = document.createElement("form");
    const etiqueta = document.createElement("label");
    etiqueta.textContent = "Edad para el tripulante";
    etiqueta.setAttribute("for","edad");//Asociamos el label al input con el id "edad"
    const inputEdad = document.createElement("input");
    inputEdad.setAttribute("id","edad");
    inputEdad.setAttribute("type","number");
    inputEdad.setAttribute("placeholder","Edad");
    inputEdad.setAttribute("min","1");

    const botonera = document.createElement("div");
    const boton = document.createElement("button");
    boton.textContent = "Comenzar";
    boton.disabled = true;

    //Evento activar el botón solo si el usuario introduce una edad válida
    inputEdad.addEventListener("input",() => {
        if(inputEdad.value.trim() != "" && inputEdad.value > 0){
            boton.disabled = false;
        } else {
            boton.disabled = true;
        }
    });
    //Añadimos el botón al DOM
    botonera.appendChild(boton);
    boton.addEventListener("click",comenzar);
    
    formulario.appendChild(etiqueta);
    formulario.appendChild(inputEdad);
    formulario.appendChild(botonera);
    document.body.appendChild(formulario);
};

const comenzar = (e) => {
    const edad = document.querySelector("#edad");
    if (edad.value <= 12){
        crearTablero(5);
    } else if (edad.value > 12){
        crearTablero(10);
    }
    e.prevenDefault();
};
const crearTablero = (numFilas) => {
    //Vamos a generar los barcos aleatoriamente
    generarBarcosAleatorios(numFilas);

    const tabla = document.createElement("table");
    let contador = 0;
    //Añado la tabla al body
    document.body.appendChild(tabla);
    for (let f = 0; f < numFilas; f++){
        const fila = document.createElement("tr");
        tabla.appendChild(fila);
        for(let c = 0; c < numFilas; c++){
            const columna = document.createElement("td");
            columna.setAttribute("id",contador++);
            const imagen = document.createElement("img");
            //Añadir la imagen a la celda
            columna.appendChild(imagen);
            // columna.addEventListener("click",pulsar);
            fila.appendChild(columna);
        }
    }
};
function generarBarcosAleatorios(numFilas){
    aBarcos.length = 0;//Limpiamos el array por si ha jugado antes
    do {
        const numero = Math.round(Math.random() * (numFilas * numFilas) + 1);
        //Comprobamos que este número no está en el array
        if (aBarcos.findIndex((barco) => barco == numero) == -1){
            aBarcos.push(numero);//Lo añado si no está repetido
        }
    }while(aBarcos.length < 5);
    console.log("Barcos " + aBarcos);
};

function pulsar(){
    //Comprobar si hay barco o hay agua
    if(aBarcos.includes(parseInt(this.id))){
        this.children[0].setAttribute("src","imagenes/barco.jpg");
        aciertos++;
    } else{
        this.children[0].setAttribute("src","imagenes/agua.jpg");
        intentos++;
    }
    this.removeEventListener("click",pulsar);//ELimino el evento de click en esta celda
    //Comprobamos si ya ha acertado todo
    if(aciertos == 5){
        finalizar();
    }
};
const finalizar = () => {
    Swal.fire({
        title: `Terminado! Has fallado ${intentos} veces`,
        text:'¿Desea continuar jugando?',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        CancelButtonText: Abandonar,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          limpiar();
        } 
      })
};
function limpiar(){
    document.querySelector("table").remove();
    document.querySelector("#edad").value = "";
    aBarcos = [];
    
}