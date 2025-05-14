document.getElementById("probar").addEventListener("click",()=>{
    //Quedarnos con los valores de los inputs
    const expreRegu = document.getElementById("expreRegu").value;
    const cadenaPrueba = document.getElementById("cadenaPrueba").value;
    //Donde vamos a mostrar los resultados
    const resultado = document.getElementById("resultado");

    try{
        let regExp;
        //VAmos a comprobar que la entrada del usuario tiene o no delimitadores `/`
        if(expreRegu.startsWith('/') && expreRegu.lastIndexOf('/') > 0){
            const ultimoModi = expreRegu.lastIndexOf('/');
            //Extraemos el patrón entre el primer y el último /
            const patron = expreRegu.slice(1,ultimoModi);
            //Extraemos los modificadores
            const modificadores = expreRegu.slice(ultimoModi + 1);
            //Definimos un objeto con esa expresión regular
            regExp =new RegExp(patron, modificadores);
        }else{
            //Definimos un objeto con esa expresión regular
            regExp =new RegExp(expreRegu);
        }
        //Comprobamos si el texto cumple con el patrón
        let result = regExp.test(cadenaPrueba);
    
        if (result){
            resultado.textContent = "Coincidencia encontrada!";
        }else{
            resultado.textContent = "No hay coincidencia";
        }
    }catch(e){//Si hay un error al crear la expresión regular
        resultado.textContent = "Error en la expresión regular: " + e.message;
    }

});



//Ejemplos de expresiones regulares

//1. ^: al inicio de una cadena
console.log("Ejem1");
console.log(/^Hola/.test("hola mundo")); //true
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

//4. +:Coincide 1 o más veces
console.log("Ejem4");
console.log(/a+/.test("aa")); //true
console.log(/a+/.test("b")); //false

//5. *:Coincide 0 o más veces
console.log("Ejem5");
console.log(/a*/.test("aa")); //true
console.log(/a*/.test("b")); //true

//6. {n}: coincide mínimo n veces
console.log("Ejem6");
console.log(/a{3}/.test("aaa")); //true
console.log(/a{3}/.test("aaaa")); //true

//7. {n,}: coincide n o más veces
console.log("Ejem7");
console.log(/a{3,}/.test("aa")); //false
console.log(/a{3,}/.test("aaaaaa")); //true

//8. {n,m}: coincide n y máximo m veces
console.log("Ejem8");
console.log(/a{3,5}/.test("aaaaaaa")); //false
console.log(/a{3,5}/.test("aa")); //false

//9. .: Cualquier caracter excepto el salto de línea
console.log("Ejem9");
console.log(/a.b/.test("a_b")); //true
console.log(/a.b/.test("ab")); //false

//10. [...]:Cualquiera entre los corchetes
console.log("Ejem10");
console.log(/[aeiou]/.test("hola")); //true
console.log(/[aeiou]/.test("xtr")); //false

//11. [^...]: Cualquier caracter excepto los que están entre corchetes
console.log("Ejem11");
console.log(/[^aeiou]/.test("aeiou")); //false
console.log(/[^aeiou]/.test("tfg")); //true

//12. \b: Coincide con el inicio de una palabra
console.log("Ejem12");
console.log(/\bword/.test("the word")); //true
console.log(/\bword/.test("password")); //false

//13. \B: No se encuentra al principio
console.log("Ejem13");
console.log(/\Bword/.test("awords")); //true
console.log(/\Bword/.test("words")); //false

//14. \d: Dígitos del 0 al 9
console.log("Ejem14");
console.log(/\d/.test("123")); //true
console.log(/\d/.test("asd")); //false

//15. \D: cualquier caracter que no sea dígito
console.log("Ejem15");
console.log(/\D/.test("123")); //false
console.log(/\D/.test("asd")); //true

//16. \w: coincide con caracteres de tipo alfanuméricos(letras, dígitos, guión bajo)
console.log("Ejem16");
console.log(/\w/.test("123_a")); //true
console.log(/\w/.test("@?.")); //false

//17. \W: coincide con caracteres que no sean de tipo alfanuméricos(letras, dígitos, guión bajo)
console.log("Ejem17");
console.log(/\W/.test("?")); //true
console.log(/\W/.test("ad_")); //false

//18. \n:m coincide co una nueva línea
console.log("Ejem18");
console.log(/\n/.test("\nsdfasdf")); //true
console.log(/\n/.test("sdfasdf")); //false

//19. \s: coincide con espacio en blanco
console.log("Ejem19");
console.log(/\s/.test("Hello word")); //true
console.log(/\s/.test("Helloword")); //false

//20. \S: no coincide con espacio en blanco
console.log("Ejem20");
console.log(/\S/.test(" ")); //false
console.log(/\S/.test("Helloword")); //true

//21. \t: coincide con tabulador
console.log("Ejem21");
console.log(/\t/.test("Hello\tword")); //true
console.log(/\t/.test("Hello  word")); //false



