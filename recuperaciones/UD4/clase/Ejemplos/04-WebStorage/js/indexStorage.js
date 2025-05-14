//Comprobamos que el navegador soporta webstorage
if(typeof(Storage) !== "undefined"){
    //window.localStorage : almacenar datos SIN fecha de expiración

    //CREAR un elemento, siempre le tenemos que pasarle cadenas!
    localStorage.setItem("nombre","María");
    localStorage.setItem("apellido","Ojeda");
    //localStorage.apellido = "Ojeda"; //Así funciona, pero no es recomendable

    //CONSULTAR un elemento
    alert(localStorage.getItem("nombre"));
    alert(localStorage.getItem("apellido"));
    //alert(localStorage.apellido);//Así funciona, pero no es recomendable

    //BORRAR un elemento
    localStorage.removeItem("apellido");
    alert(localStorage.getItem("nombre") + "-" + localStorage.getItem("apellido"));

    //BORRAR todos los elementos
    //localStorage.clear();
    alert(localStorage.getItem("nombre") + "-" + localStorage.getItem("apellido"));
    alert("No existe edad:" + localStorage.getItem("edad"));


}else{
    alert("El navegador no soporta WebStorage");
}