//Ejemplos de expresiones regulares.

//1. ^: al inicio de una cadena
console.log("Ejem1");
console.log(/^Hola/.test("Hola mundo")); //true
console.log(/^Hola/.test("mundo Hola")); //false

//2. $:Al final de una cadena
console.log("Ejem2");
console.log(/mundo$/.test("Hola mundo")); //true
console.log(/mundo$/.test("mundo Hola")); //false

//3. ?:Coincide 0 o 1 vez
console.log("Ejem3");
console.log(/colou?r/.test("color")); //true
console.log(/colou?r/.test("colour")); //true
console.log(/colou?r/.test("colouur")); //false

//4. +:Coincide 1 vez o más veces
console.log("Ejem4");
console.log(/a+/.test("aaaaa")); //true
console.log(/a+/.test("b")); //false

//5. *:Coincide 0 o más veces
console.log("Ejem5");
console.log(/a*/.test("aa")); //true
console.log(/a*/.test("b")); //false

//6. {n,}:Coincide n o más veces
console.log("Ejem6");
console.log(/a{3,}/.test("aaa")); //true
console.log(/a{3,}/.test("aaaaaa")); //true