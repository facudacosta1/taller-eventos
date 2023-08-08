document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("div-boton").onclick = function(event) {
        if (event.target.tagName !=="BUTTON"){ //Si la etiqueta es diferente a BUTTON no se llama a la function mostrarSaludoDiv();
            mostrarSaludoDiv();
        }
    };

    function mostrarSaludoDiv(){
        alert("Hola! Soy el div");
    }
});

//Notas: en el event.target.tagName se debe colocar el nombre de la etiqueta en mayusculas siempre
