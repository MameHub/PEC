//USANDO XMKHttpRequest
//Paso1 - Creo la instancia
const xhr = new XMLHttpRequest();

//Paso2 - Asignamos evento para detectar cambios en estado de la solicitud
xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState != 4){
        return;
    }
    if(xhr.status >= 200 && xhr.status < 300){//Ha habido éxito en la solicitud
        let json = JSON.parse(xhr.responseText);
        console.log("XMKHttpRequest");
        console.log("--------------");
        json.forEach(elemento =>{
            console.log("Nombree: ", elemento.name, "Correo: ",elemento.email);
        })
        
    }else{
        console.log("Ha ocurrido un error");
    }
});
//Paso 3 - Configurar la solicitud
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//Paso 4 - Enviar la solicitud
xhr.send();

//USANDO fetch con then
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    //Vemos que nos ha contestado el servidor
    console.log("fetch con then");
    console.log("--------------");
    if(response.ok && response.status === 200){
        let json = response.json();//también devuelve una promesa
        return json;
    }else{
        throw("Ha habido un error con la petición");
    }
})
.then((json) => {
    //Ya se que la variable json está completa
    json.forEach(elemento =>{
        console.log("Nombre: ", elemento.name, "Correo: ",elemento.email);
    })
})
.catch(e => {//Capturamos los errores de red o de conversión
    console.log(e);
});


//USANDO fetch con async/await
//definimos la función asíncrona que realiza la petición
async function miPeticion(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let json = await response.json();

        console.log("fetch con async/await");
        console.log("---------------------");

        if(!response.ok && response.status != 200){
            throw("Ha habido algúnerror en la petición");
        }
        
        json.forEach(elemento =>{
            console.log("Nombre: ", elemento.name, "Correo: ",elemento.email);
        })

    }catch(error){
        console.log(error);
    }
}
miPeticion();//Llamamos a la función

// USANDO AXIOS con then
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    // console.log(response);
    let json = response.data;//Accedemos directamente al json con los datos del servidor.
    
    console.log("AXIOS con then");
    console.log("----------------------");
    json.forEach(elemento => {
        console.log("Nombre: ", elemento.name, "Correo: ", elemento.email);
    });
})
.catch((error) => {
    console.log(error.response.status);
});

//USANDO AXIOS con async/await
async function miPeticion2() {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        let json = response.data;

        console.log("AXIOS con async/await");
        console.log("------------------------");
        json.forEach(elemento => {
            console.log("Nombre: ", elemento.name, "Correo: ", elemento.email);
        });
    } catch (error) {
        console.log(error.response.status);
    };
};
miPeticion2();
console.log("FIN?");