// Importamos las clases.
import { Personaje } from "./personaje.js";
import { Protagonista } from "./protagonista.js";
import { Escenario } from "./escenario.js";
import { Cuento } from "./cuento.js";

// Creamos y usamos los objetos.
try {
    
    // 3 Personajes
    const personaje1 = new Personaje("Mamev0", "Clavate", 27);
    const personaje2 = new Personaje("Yisus", "Lilty", 29);
    const personaje3 = new Personaje("Naza", "Selki", 16);
    const personaje4 = new Personaje("Paulinha", "Yuko", 1);

    // 3 Protagonistas
    const protagonista1 = new Protagonista("Mamev0", "Clavate", 27, "furia");
    const protagonista2 = new Protagonista("Yisus", "Lilty", 29, "frenesi");
    const protagonista3 = new Protagonista("Naza", "Selki", 16, "alto rendimiento");

    // 2 Escenarios
    const escenario1 = new Escenario("Tierras del reino", "Selva", "Tropical");
    const escenario2 = new Escenario("Ágrabah", "Orilla del río", "Árido");

    // Cuento
    const cuento1 = new Cuento("Las aventuras del IL", "Er Paco", "Aventuras vividas por estudiantes de una academia", "Se aventuran sobre unas extrañas tierras [...]");
    // Introducimos escenarios y personajes mediante los métodos de la clase "cuento".
    cuento1.introducirEscenario(escenario1);
    cuento1.introducirEscenario(escenario2);
    cuento1.annadirPersonaje(personaje1);
    cuento1.annadirPersonaje(personaje2);
    cuento1.annadirPersonaje(personaje3);
    cuento1.annadirPersonaje(personaje4);
    cuento1.annadirPersonaje(protagonista1);
    cuento1.annadirPersonaje(protagonista2);
    cuento1.annadirPersonaje(protagonista3);

    // Mostramos la información completa del cuento.
    console.log(cuento1.toString());

} catch (error) {
    console.error("Error: ",error);
}