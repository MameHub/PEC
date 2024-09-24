
var atipico = 10/"casa"; //Devuelve NaN

// Números con objetos
var num1 = 123;
var num2 = new Number(123);
var num3 = new Number(123);

alert("num1 " +typeof(num1)); // Devuelve number
alert("num2 " +typeof(num2)); // Devuelve object
alert("num3 " +typeof(num3));
alert("num1 == num2:"+(num1==num2));
alert("num1 == num2:"+(num1===num2));
alert("num2 == num3:"+(num2==num3));

// PROPIEDADES.
var maximo = Number.MAX_VALUE; alert("Máximo="+maximo);
var minimo = Number.MAX_VALUE; alert("Mínimo="+minimo);

// MÉTODOS
// toFixed(<numero decimales>): número específico de decimales
// toPrecision(<número de cifras>)
var x = 9.8765;
alert(x.toFixed(0));
alert(x.toFixed(2));
alert(x.toFixed(6));
alert(x.toPrecision(2));

// MÉTODOS GLOBALES PARA CONVERTIR VARIABLES A NÚMEROS:
alert(Number(true));
alert(Number(false));
alert(Number("10"));
alert(Number("casa")); // Devuelve NaN

alert("paeseInt: "+parseInt("10 20")); // 10
alert(parseInt("casa")); // NaN
alert(parseInt("10 loquesea")); // 10