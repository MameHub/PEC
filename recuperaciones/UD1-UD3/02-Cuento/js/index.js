// Importamos las clases.
import { Personaje } from "./personaje";
import { Protagonista } from "./protagonista";
import { Escenario } from "./escenario";
import { Cuento } from "./cuento";

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
    const escenario1 = new Escenario("", "", "");
    const escenario2 = new Escenario("", "", "");

    // Cuento
    const cuento1 = new Cuento();

    // Mostramos la información completa del cuento.
    console.log(cuento1.toString());


} catch (error) {
    console.error("Error: ",error);
}