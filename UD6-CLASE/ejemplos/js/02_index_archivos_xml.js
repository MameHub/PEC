document.addEventListener("DOMContentLoaded",() => {
    document.getElementById("cargaCatalogo").addEventListener("click",cargaCatalogo);

    //Función para la solicitud AJAX para obtener el XML
    function cargaCatalogo() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status == 200) {
                cargarXML(this);
            }
        };
        xhr.open("GET","cd_catalog.xml",true);
        xhr.send();
    }

    //Función que procesa el XML recibido y lo muestra por pantalla
    function cargarXML(xml) {
        var docXML = xml.responseXML;
        //Definimos la estructura de la tabla
        var tabla = "<tr><th>Artista</th><th>Título</th></tr>"
        //Obtenemos todos los elementos <CD> detro del XML en un array
        var discos = docXML.getElementBytagName("CD");

        //Recorremos todos los CDs y extraemos artista y título
        for(var i = 0; i < discos.lenght; i++) {
            //Creo una fila nueva
            tabla += "<tr><td>";
            tabla += discos[i].getElementBytagName("ARTIST")[0].textoContent;//Es el 0 pq solo hay uno
            tabla += "</td><td>";
            tabla += discos[i].getElementBytagName("TITTLE")[0].textoContent;
            tabla += "</td></tr>";
        }
        //Inserto la tabla dentro de mi HTML
        document.getElementById("demo").innerHTML = tabla;
    }

});