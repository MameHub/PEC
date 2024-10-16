// Permite HOISTING
console.log(sumar(3,5));
function sumar(a,b){
    return(a+b);
}

//console.log(sumaI(3,6)); Da error
const sumaI = function(a,b){
    return (a+b);
}
console.log(sumaI(3,6));