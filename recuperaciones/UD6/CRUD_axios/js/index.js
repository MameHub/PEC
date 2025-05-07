window.addEventListener("DOMContentLoaded", inicio);

function inicio() {
    document.getElementById("consultar").addEventListener("click", consultar);
}

async function consultar() {
    let nombre = document.getElementById("nombreAlumno").value.trim();
    let resultadoDiv = document.getElementById("resultado");

    if (nombre === "") {
        resultadoDiv.innerHTML = "Introduce un nombre a buscar";
        return;
    }
    try {
        let response = axios.get("index.php", {params: {objeto: JSON.stringify({tabla: "alumnos", nombre: nombre})}
        });
        if (response.data.length == 0) {
            resultadoDiv.innerHTML = "Alumno no encontrado";
            return;
        }
        let alumno = response.data[0]; //Nos quedamos con el primer elemento de la respuesta del servidor.
        let responseDireccion = await axios.get("index.php", {params:{objeto: JSON.stringify({tabla: "direccion", idAlumno: alumno.idAlumno})}
    });

    if (responseDireccion.data.length > 0) {
        direccionServidor = responseDireccion.data[0].calle;
    } else {
        direccionServidor = "Sin casa";
    }
    resultadoDiv.innerHTML = `Alumno: ${alumno.alumno} Calle: ${direccionServidor}`;

    } catch (error) {
        resultadoDiv.innerHTML = "Error al obtener los datos";
        console.error(error);
    }
}