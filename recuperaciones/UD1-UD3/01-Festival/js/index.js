import { Jurado } from "./jurado.js";
import { Participante } from "./participante.js";
import { Produccion } from "./produccion.js";

// 3 Participantes.
const particinpante1 = new Participante("Manolo", 9);
const particinpante2 = new Participante("Bea", 19);
const particinpante3 = new Participante("Bertín", 23);

// 3 Jurados
const jurado1 = new Jurado("Bertín", 30, "Arquitecto", "b");
const jurado2 = new Jurado("María", 19, "Comercial", "l");
const jurado3 = new Jurado("Eustaquio", 71, "Jubilado", "g");

// 2 Producciones
const produccion1 = new Produccion("Desatado", "Española", "drama", 1999);
const produccion2 = new Produccion("Fly", "EEUU", "Comedia", 2009);

// Festival y sus métodos


// Métodos toString().
console.log(particinpante1.toString());
console.log(particinpante2.toString());
console.log(particinpante3.toString());
console.log(jurado1.toString());
console.log(jurado2.toString());
console.log(jurado3.toString());
console.log(produccion1.toString());
console.log(produccion2.toString());