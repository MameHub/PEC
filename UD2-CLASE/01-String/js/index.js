//INSTANCIACIÓN:
var daw = "Desarrollo de aplicaciones web";
var dam = 'Desarrollo de aplicaciones multiplataforma';
var asir = "Administración de 'Sistemas Informáticos' en Red";
var smr = "Sistemas \"Microinformáticos\" y Redes";
var ciclos = new String("");

//CONCATENACIÓN DE CADENAS
ciclos += "Hay 3 ciclos de Grado Superior: \n";
ciclos += daw + ", " + dam + " y " + asir + "\n";
ciclos += " y 1 ciclo de Grado Medio: \n";
ciclos += smr;

alert (ciclos);

//PROPIEDADES
//length: devuelve la longitud de una cadena
alert ("La longitud de la cadena ciclos es: "+ciclos.length);

//MÉTODOS:
//BÚSQUEDA:
//CharAt(<num>): devuelve el caracter de una posición.
alert ("El caracter 16 de la cadena ciclos es: "+ciclos.charAt(16));
//indexOf(<caracter>): devuelve la primera posición de un caracter en una cadena.
alert ("La primera aparición de la letra a en ciclos es: "+ciclos.indexOf("a"));
//lastIndexOf(<caracter>): devuelve la última posición de un caracter en una cadena.
alert ("La última aparición de la letra a en ciclos es: "+ciclos.lastIndexOf("a"));
//search(<cadena|expresión>): buscar una cadena o expresión regular en otra cadena.
alert ("Busca la cadena 'web' en la variable daw: "+daw.search("web"));
//match (<expresión regular>): busca una expresión regular en otra cadena.

//COMPARACIÓN:
//localeCompare(<cadena>): devuelve -1 (antes), 0 (igual), 1 (después)
let cadena1 = "manzana";
let cadena2 = "naranja";

let resultado = cadena1.localeCompare(cadena2);

if (resultado === -1) {
    console.log(`"${cadena1}" va antes que "${cadena2}"`);
} else if (resultado === 1) {
    console.log(`"${cadena1}" va después que "${cadena2}"`);
} else {
    console.log(`"${cadena1}" es igual a "${cadena2}"`);
}

//INCLUYE, EMPIEZA O TERMINA
//includes(<cadena>): devuelve true si la cadena incluye el parámetro.
alert ("¿Incluye 'aplicaciones' daw? "+daw.includes("aplicaciones"));
//startsWith(<cadena>): devuelve true si la cadena empieza con el parámetro.
alert ("Empieza daw con la palabra 'aplicaciones'? "+daw.startsWith("aplicaciones"));
//endsWith(<cadena>): devuelve true si la cadena finaliza con el parámetro.
alert ("Acaba daw con la palabra 'aplicaciones'? "+daw.endsWith("aplicaciones"));

//CONCATENACIÓN Y REPETICIÓN
//concat(<cadena>): concatena a la cadena el parámetro:
alert ("Concatena daw con dam \n"+daw.concat(dam));
//repeat(<número>): repetir la cadena el número de veces que aparece como parámetro
alert ("Repetir daw \n"+daw.repeat(3));

//EXTRACCION
//slice(<posicion inicial>,<posicion final>): devuelve la cadena comprendida entre ambas posiciones:
alert ("La cadena que hay entre el 0 y el 1 en daw es: "+daw.slice(0,1));
//substring(<posicion inicial>,<posicion final>): devuelve la cadena comprendida entre ambas posiciones:
alert ("La cadena que hay entre el 0 y el 1 en daw es: "+daw.substring(0,1));
//split(<caracter>,[<número de veces]): divide la cadena en un array de subcadenas separadas por el caracter del primer parámetro
alert("La cadena daw separada por espacios es: "+daw.split(" ",2));
//trim(<cadena>): extrae los caracteres de la cadena eliminando los espacios del principio y del final.
alert ("La cadena sin espacios quedaría: \n"+"             Hola, caracola               ".trim());

//MÁYÚSCULAS Y MINÚSCULAS
//toLowerCase(): devuelve la cadena en minúsculas:
alert (daw.toLowerCase());
//toUpperCase(): devuelve la cadena en mayúsculas:
alert (daw.toUpperCase());

