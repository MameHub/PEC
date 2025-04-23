// Array de super heroes.
const heroes = [
    {nombre: "Iron Man", poder: ["tecnología avanzada", "vuelo", "inteligencia"], nivelDePoder: 85, ciudad: "Nueva York", activo: true},
    {nombre: "Thor", poder: ["fuerza sobrehumana", "control del trueno", "vuelo"], nivelDePoder: 95, ciudad: "Asgard", activo: true},
    {nombre: "Hulk", poder: ["fuerza extrema", "resistencia"], nivelDePoder: 90, ciudad: "Nueva York", activo: false},
    {nombre: "Capitán América", poder: ["fuerza", "habilidad con escudo", "liderazgo"], nivelDePoder: 75, ciudad: "Washington D.C.", activo: true},
    {nombre: "Black Widow", poder: ["artes marciales", "espionaje", "armas"], nivelDePoder: 70, ciudad: "Moscú", activo: false},
    {nombre: "Spider-Man", poder: ["trepa muros", "sentido arácnido", "fuerza"], nivelDePoder: 80, ciudad: "Nueva York", activo: true},
];

// 1. Buscar héroes que operan en Nueva York: Utiliza el método filter para obtener una lista de héroes que operan en Nueva York.
const heroe = heroes.filter(heroe => heroe.ciudad == "Nueva York");
heroe.forEach(heroe => console.log(heroe.nombre));

// 2. Verificar si hay algún heroe que esté activo actualmente y opere en Asgard: Usa some para determinar si hay algún héroe activo en Asgard.
const asg = function(Asgard) {
    heroes.ciudad = "Asgard"
};