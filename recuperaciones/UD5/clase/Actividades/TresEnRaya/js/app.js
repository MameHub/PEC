//PROPONER MEJORAS AL ALUMNADO:
//- UN CONTADOR DE TIEMPO QUE SOLO PUEDA ESTAR 10 SEGUNDOS PENSANDO O PIERDE TURNO
//- PEDIR EL NOMBRE A CADA JUGADOR Y ALMACENAR EN WEBSTORAGE EL NOMBRE DEL QUE HAGANADO
document.addEventListener("DOMContentLoaded",()=>{
    //Creamos el contenedor principal del juego
    const contenedor = document.createElement("div");
    contenedor.id = "game-container";
    document.body.appendChild(contenedor);

    //Creamo el título
    const titulo= document.createElement("h1");
    titulo.textContent = "Tres en Raya";
    contenedor.appendChild(titulo);

    //Botón para iniciar el juego
    const botonInicio = document.createElement("button");
    botonInicio.id = "comenzar";
    botonInicio.textContent = "Comenzar";
    contenedor.appendChild(botonInicio);

    // Botón para ver historial de victorias
    const botonHistorial = document.createElement("button");
    botonHistorial.id = "ver-historial";
    botonHistorial.textContent = "Ver Historial";
    contenedor.appendChild(botonHistorial);

    //Texto que indica el turno
    const parrafoTurno = document.createElement("p");
    parrafoTurno.id = "turno";
    parrafoTurno.textContent = "";
    contenedor.appendChild(parrafoTurno);

    // Temporizador
    const parrafoTiempo = document.createElement("p");
    parrafoTiempo.id = "tiempo";
    parrafoTiempo.textContent = "";
    contenedor.appendChild(parrafoTiempo);

    //Creamos el tablero del juego
    const tablero = document.createElement("div");
    tablero.id = "tablero";
    contenedor.appendChild(tablero);
    //Creamoslas celdas del tablero
    for (let i = 0 ; i < 9 ; i++){
        const celda = document.createElement("div");
        celda.classList.add("celda");//añadiendo la clase celda sin afectar a otras clases que ya tenga
        celda.dataset.index = i;//A cada celda del tablero le asigno un atributo data-index con la posición en el tablero
        tablero.appendChild(celda);
    }

    //Crear área para el resultado
    const resultado = document.createElement("p");
    resultado.id = "resultado";
    contenedor.appendChild(resultado);

    //Variables del juego
    let jugadorActual = "X";
    let estadoTablero = Array(9).fill(null);//estadoTablero = [null, null, null, null, null, null, null, null, null];
    let jugadores = {};//Objeto como: 
    //jugadores = { 
        //X: "Juan", 
        //O: "Ana"
    //};
    let victoriasJugadores = JSON.parse(localStorage.getItem("victoriasJugadores")) || {};//Si no hay nada en el JSON se almacena {}
    let tiempoRestante;
    let intervalo;


    //Reiniciamos el juego cuando se pulsa
    botonInicio.addEventListener("click",pedirNombres);
     // Evento para mostrar el historial de victorias
     botonHistorial.addEventListener("click", mostrarHistorial);

    // Función para pedir los nombres de los jugadores
    function pedirNombres() {
        let jugadorX, jugadorO;
    
        // Pedir los nombres con prompt hasta que sean válidos
        do {
            jugadorX = prompt("Introduce el nombre del jugador X:").trim();
        } while (!jugadorX);
    
        do {
            jugadorO = prompt("Introduce el nombre del jugador O:").trim();
        } while (!jugadorO);
    
        // Asignamos los nombres al objeto jugadores
        jugadores = { X: jugadorX, O: jugadorO };
    
        // Iniciar el juego después de obtener los nombres
        iniciarJuego();
    }
    
   

    function iniciarJuego(){
        estadoTablero.fill(null);//Limpiamos el tablero "virtual"
        document.querySelectorAll(".celda").forEach(celda => celda.textContent = "");//Borrar el contenido de las celdas las X y las O, limpiamos la interfaz
        resultado.textContent = "";
        jugadorActual = "X";
        parrafoTurno.textContent =`Turno: ${jugadores[jugadorActual]}`;
        parrafoTurno.className = "turno-jugador";//Reemplaza todas las clases existentes
        //parrafoTurno.classList.add = "turno-jugador";//Añadir respetando lo que ya tenga

        // Iniciar el temporizador
        iniciarTemporizador();

        //Añadir evento a las celdas cuando ya le ha dado a comenzar
        tablero.addEventListener("click", pulsar);
    }

    function iniciarTemporizador() {
        tiempoRestante = 10;
        parrafoTiempo.textContent = `Tiempo restante: ${tiempoRestante}s`;

        // Detener cualquier temporizador previo
        clearInterval(intervalo);

        // Iniciar nuevo temporizador
        intervalo = setInterval(() => {
            tiempoRestante--;
            parrafoTiempo.textContent = `Tiempo restante: ${tiempoRestante}s`;

            if (tiempoRestante === 0) {
                clearInterval(intervalo);
                resultado.textContent = `¡Tiempo agotado! ${jugadores[jugadorActual]} pierde el turno.`;
                cambiarTurno();
            }
        }, 1000);
    }

    function pulsar(e){
        const indicePulsado = e.target.dataset.index;
        //DEBERÍA COMPROBAR SI HA GANADO ALGUIEN, NO DEJO SEGUIR PULSANDO
        if(verificarSiGanador()){
            return;
        }
        //Tenemos que comprobar si ya hay algo escrito en esa celda
        if(e.target.textContent == ""){
            estadoTablero[indicePulsado] = jugadorActual;//Almaceno en mi array 'virtual', la X o la O en el index que haya sido pulsado
            e.target.textContent = jugadorActual;//Lo muestro en el HTML
    
            //Comprobamos si ya ha ganado
                if(!verificarSiGanador()){
                    cambiarTurno();
                }
        }
    }

    function cambiarTurno(){
        if (jugadorActual === "X"){
            jugadorActual = "O";
        }else{
            jugadorActual = "X";
        }
        parrafoTurno.textContent = `Turno: ${jugadores[jugadorActual]}`;
        parrafoTurno.className = "turno-jugador";
        // Reiniciar el temporizador al cambiar de turno
        iniciarTemporizador();
    }
    function verificarSiGanador(){
        //Coprobaciones de filas
        for(let i = 0; i < 9 ; i+=3){//Va a recorrer solo las filas, el index de 3 en 3
            if(estadoTablero[i] != null && estadoTablero[i]==estadoTablero[i+1] && estadoTablero[i]==estadoTablero[i+2])
            {
                resultado.textContent = `Jugador ${jugadores[estadoTablero[i]]} gana!`;
                const ganador = jugadores[estadoTablero[i]];
                guardarResultadoEnLocalStorage(ganador);
                detenerTemporizador(); 
                return true;
            }
        }
        //Comprobaciones de columnas
        for(let i = 0; i < 3 ;i++){
            if(estadoTablero[i] != null && estadoTablero[i]==estadoTablero[i+3] && estadoTablero[i]==estadoTablero[i+6]){
                resultado.textContent = `Jugador ${jugadores[estadoTablero[i]]} gana!`;
                const ganador = jugadores[estadoTablero[i]];
                guardarResultadoEnLocalStorage(ganador);
                detenerTemporizador(); 
                return true;
            }
        }
        //Coprobar diagonales
        if(estadoTablero[0] != null && estadoTablero[0] == estadoTablero[4] && estadoTablero[0] == estadoTablero[8]){
            resultado.textContent = `Jugador ${jugadores[estadoTablero[0]]} gana!`;
            const ganador = jugadores[estadoTablero[0]];
            guardarResultadoEnLocalStorage(ganador);
            detenerTemporizador(); 
                return true;
        }
        //Coprobar diagonales
        if(estadoTablero[2] != null && estadoTablero[2] == estadoTablero[4] && estadoTablero[0] == estadoTablero[6]){
            resultado.textContent = `Jugador ${jugadores[estadoTablero[2]]} gana!`;
                const ganador = jugadores[estadoTablero[2]];
                guardarResultadoEnLocalStorage(ganador);
                detenerTemporizador(); 
                return true;
        }
        //Comprobar si hay empate
        if(!estadoTablero.includes(null)){
            resultado.textContent = "Empate!";
            guardarResultadoEnLocalStorage(null);
            detenerTemporizador(); 
            return true;
        }
        return false;
        
    }
        //función para detener el temporizador
    function detenerTemporizador() {
        clearInterval(intervalo);
        parrafoTiempo.textContent = "Tiempo restante: 0s"; // Se muestra 0s cuando termina
    }

    function guardarResultadoEnLocalStorage(ganador) {
        
        // Actualizar el contador de victorias
        if (ganador) {
            if (!victoriasJugadores[ganador]) {//Si aún no se ha registrado este jugador como ganador
                victoriasJugadores[ganador] = 0;
            }
            victoriasJugadores[ganador]++;
            localStorage.setItem("victoriasJugadores", JSON.stringify(victoriasJugadores));
        }
    }
    // Función para mostrar el historial de victorias con SweetAlert
    function mostrarHistorial() {
        let victorias = JSON.parse(localStorage.getItem("victoriasJugadores")) || {};
        let mensaje = "Historial de victorias:<br>";

        if (Object.keys(victorias).length === 0) {
            mensaje = "No hay victorias registradas aún.";
        } else {
            for (let jugador in victorias) {
                mensaje += `${jugador}: ${victorias[jugador]} victorias<br>`;
            }
        }
        Swal.fire({
            title: "Historial de Victorias",
            html: mensaje,
            icon: "info",
            confirmButtonText: "Ok"
        });
    }
});
