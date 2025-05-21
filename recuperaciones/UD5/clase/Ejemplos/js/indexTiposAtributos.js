//EJEMPLOS DE TIPOS DE ELEMENTOS Y SUS ATRIBUTOS/PROPIEDADES
//1.Elementos de texto
const texto = document.createTextNode("Hola, esto es un texto");
const p = document.createElement("p");
p.appendChild(texto);
document.body.appendChild(p);
//2.Elementos HTML básicos
//<div> <img>
const div1 = document.createElement("div");
div1.textContent = "Esto es un DIV creado dinámicamente";
document.body.appendChild(div1);
//3. Elementos de formulario
//Como <input><button>
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Introduce tu nombre";
document.body.appendChild(input);
const boton = document.createElement("button");
boton.textContent = "Enviar";
document.body.appendChild(boton);
//4. Elementos multimedia
//Como img, audio,...
//Podemos incluir sus atributos src, alt, autoplay...
const imagen = document.createElement("img");
imagen.src = "PC.webp";
imagen.alt = "Imagen de ejemplo de la princesa chicle";
document.body.appendChild(imagen);
const video = document.createElement("video");
video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
video.controls = "true";
document.body.appendChild(video);
//5.Elementos estructuralies y de navegación
//Como ul, li, table...
const lista = document.createElement("ul");
const item1 = document.createElement("li");
item1.textContent = "Elemento 1";
lista.appendChild(item1);
const item2 = document.createElement("li");
item2.textContent = "Elemento 2";
lista.appendChild(item2);
document.body.appendChild(lista)

//ATRIBUTOS COMUNES
//1. Estilo y clases - style, classNamen,id...
const div2 = document.createElement("div");
div2.style.backgroundColor = "pink";
div2.className = "mi-clase";
div2.id = "mi-id";
div2.textContent = "Estilo, clase e ID";
document.body.appendChild(div2);
//2. Eventos
const boton2 = document.createElement("button");
boton2.textContent = "Haz clic";
boton2.onclick = () => alert("Has pulsado el botón 2!");
document.body.appendChild(boton2);

//ATRIBUTOS ESPECÍFICOS
const enlace = document.createElement("a");
enlace.href = "https://www.google.com";
enlace.textContent = "Ir a Google";
enlace.target = "_blank";
document.body.appendChild(enlace);