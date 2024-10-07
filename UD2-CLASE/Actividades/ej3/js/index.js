// Hecho por Maria en clase

let password = "";

while(password.length < 8 && password.length > 16) {
    password = prompt("Introduzca una contraseña (debe tener entre 8 y 16 caracteres y no debe contener espacios):");
}

let NumMin = 0;
let NumMay = 0;
let NumNum = 0;
let NumEsp = 0;

for (let i = 0; i < password.length; i++){
    let elemento = password.charAt(i);

    if (elemento >="a" && elemento <= "z") {
        NumMin++;
    } else if (elemento >="A" && elemento <= "Z") {
        NumMay++;
    } else if (elemento >="0" && elemento <= "9") {
        NumNum++;
    } else {
        NumEsp++;
    }
}

// Condiciones para que la contraseña sea fuerte
if (NumMin >= 2 && NumMay >= 2 && NumNum >= 2 && NumEsp >= 1){
    document.getElementById("ventanaPpal").innerHTML = "La contraesña es fuerte";
} else {
    document.getElementById("ventanaPpal").innerHTML = "La contraesña es débil";
}