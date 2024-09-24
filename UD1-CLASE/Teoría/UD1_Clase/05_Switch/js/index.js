let nota = prompt("Introduce nota [1-10]","1");
console.log(typeof nota);
let resultado;
switch(nota){
    case "1":
    case "2":
    case "3":
    case "4":
        resultado = "Insuficiente";
        break;
    case "5":
        resultado = "Suficiente";
        break;
    case "6":
        resultado = "Bien";
        break;
    case "7":
    case "8":
        resultado = "Notable";
        break;
    case "9":
    case "10":
        resultado = "Sobresaliente!";
        break;
    default:
        resultado = "Dato incorrecto. Debe estar entre el 1 y el 10.";
        break;
}
console.log(`La nota ${nota} corresponde con un ${resultado}`);

let nota2 = prompt("Introduce nota [1-10]","1");
console.log(typeof nota2);
//Usando el switch con rangos
switch(true){
    case nota2 >=1 && nota2<=4:
        resultado = "Insuficiente";
        break;
    case nota2 >=5 && nota2 <6:
        resultado = "Suficiente";
        break;
    case nota2 >=6 && nota2 <7:
        resultado = "Bien";
        break;
    case nota2 >=7 && nota2 <=8:
        resultado = "Notable";
        break;
    case nota2>=9 && nota2<=10:
        resultado = "Sobresaliente";
        break;
    default:
    resultado = "Dato erróneo. Debe estar entre 1-10";
    break;

}
console.log(`La nota ${nota2} corresponde con un ${resultado}`);