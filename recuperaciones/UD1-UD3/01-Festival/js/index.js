import { Participante } from "./participante.js";
import { Jurado } from "./jurado.js";
import { Produccion } from "./produccion.js";
import { Festival } from "./festival.js";

try {
    
    //3 participantes
    const participante1 = new Participante("María",20);
    const participante2 = new Participante("An",17);
    const participante3 = new Participante("Juan",30);

    //3 jurados
    const jurado1 = new Jurado("Jurado1",20, "Director", "h");
    const jurado2 = new Jurado("J2",6, "Director", "m");
    const jurado3 = new Jurado("Jurado3",20, "Director", "+");

    //2 producciones
    const produccion1 = new Produccion("La soledad", "España", "Drama", 2002);
    const produccion2 = new Produccion("La galaxia", "EEUU", "Ciencia Ficción", 2024);

    //Festival
    const festival1 = new Festival("Festival Internacional", "Córdoba", 1, "Festival sobre el flamenco");
    //Añadimos participantes, jurados y producciones.
    festival1.annadirParticipante(participante1);
    festival1.annadirParticipante(participante2);
    festival1.annadirParticipante(participante3);
    festival1.annadirParticipante(jurado1);
    festival1.annadirParticipante(jurado2);
    festival1.annadirParticipante(jurado3);
    festival1.introducirProduccion(produccion1);
    festival1.introducirProduccion(produccion2);

    console.log(festival1.toString());

}catch(error) {
    console.error("Error: ",error)
}