// Comprobar que mi navegador soporta webstorage
if (typeof(Storage) !== "undefined") {
    
    // Crear un elemento
    localStorage.setItem("nombre","María");
    localStorage.setItem("apellido","Ojeda");

    // Conultar un elemento
    alert(localStorage.getItem("nombre"));
    alert(localStorage.getItem("apellido"));

    // Borrar un elemento
    localStorage.removeItem("apellido");

    // Borrar todos los elementos del Storage
    localStorage.clear();

    // Vamos a almacenar un objeto JSON
    const alumno = {
        nombre: "María",
        edad: 20,
        preferencias: {
            tema: "oscuro",
            idioma: "es"
        }
    };

    const alumnoJSON = JSON.stringify(alumno);
    localStorage.setItem("Alumno",alumnoJSON);
    alert(localStorage.getItem("Alumno"));

    const infoGuardada = JSON.parse(localStorage.getItem("Alumno"));
    alert(infoGuardada.nombre);

} else {

    alert("El navegador no soporta webstorage");

}