/*
Métodos más comunes.
random(): Devuelve un número aleatorio entre 0 y 1.
*/
alert("Número aleatorio: "+Math.random());

// redondeo.
var a = 4.3;
var b = 4.7;
var c = 4.5;
alert("Redondeo de 4.5 es: "+Math.round(c));
alert("Redondeo de 4.5 es: "+Math.ceil(c)); // Redondeo a la alta.
alert("Redondeo de 4.5 es: "+Math.floor(c)); // Redondeo a la baja.

// Entre 1 y 10.
var aleatorio = Math.floor(Math.random()*11);
alert(aleatorio);

// max(<lista de valores>) // min(<lista de valores>)
alert("Máximo de la lista: "+Math.max(1,9,3,4,5));
alert("Mínimo de la lista: "+Math.min(1,2,3,4,5,0));