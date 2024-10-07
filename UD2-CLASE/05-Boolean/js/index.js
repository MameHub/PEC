// Función Boolean
alert(10>9);

// Todos los valores reales son TRUE
alert("100 es "+Boolean(100));
alert("3.4 es "+Boolean(3.4));
alert("Hola es "+Boolean("Hola"));
alert("false "+Boolean("false"));
alert("-15 es "+Boolean(-15));
alert("5<6 es "+Boolean(5<6));

// Todos los valores que no son reales son FALSE
alert("0 es "+Boolean(0));
alert("-0 es "+Boolean(-0));
alert("undefined es "+Boolean(undefined));
alert("null es "+Boolean(null));
alert("false es "+Boolean(false));
alert("NaN es "+Boolean(NaN));

var variable;
if (!variable) {
    alert("La variable no tiene nada.");
}