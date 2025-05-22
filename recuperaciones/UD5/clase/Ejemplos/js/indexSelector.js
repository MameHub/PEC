//Cuando pulsamos sobre el botón aplicaremos un ejemplo de selector de cada tipo
document.getElementById("boton").addEventListener("click",()=>{
    //1. Selector por etiqueta: 'h1'
    const titulo = document.querySelector("h1");//Accede al primero
    titulo.textContent = "Título modificado con el selector de etiqueta";
    titulo.style.color = "blue";

    //2. Selector por clase: '.parrafo'
    const primerParrafo = document.querySelector(".parrafo");
    primerParrafo.textContent = "Primer párrafo modificado con el selector por clase";

    //3. Selector por ID: '#titulo-principal'
    const tituloPpal = document.querySelector("#titulo-principal");
    tituloPpal.style.fontSize = "50px";

    //4. Selector por atributo: 
    const inputTexto = document.querySelector('input[name="inputTexto"]');
    inputTexto.value = "Texto modificado con selector por atributo";

    //5. Selector combinado:
    const parrafoEnContenedor = document.querySelector(".contenedor .parrafo");
    parrafoEnContenedor.style.backgroundColor = "lightgray";

    //6. querySelectorAll para modificar múltiples elementos
    const todosInputs = document.querySelectorAll('input[name="inputTexto"]');
    todosInputs.forEach((input,index) =>{
        input.style.border = "2px solid red";
        input.value = `Texto del input #${index + 1}`;//Iremos mostrando en el value qué input es
    });

    //7. Seleccionar un elemento de una lista 
    const tercerElemento = document.querySelectorAll(".lista li")[2];//índice 2 es el tercer elemento
    tercerElemento.classList.add("resaltado");
    tercerElemento.textContent = "Tercer elemento modificado con querySelectorAll";

    //8. Seleccionar todos los elementos con su clase
    const subtitulos = document.querySelectorAll(".subtitulo");//Lista con todos los elementos del DOM que contienen la clase subtitulo
    subtitulos.forEach((subtitulo,index)=>{
        subtitulo.style.color = "green";
        subtitulo.textContent = `Subtítulo #${index + 1} modificado con querySelectorAll`;
    });

});