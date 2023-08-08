document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("div-boton").onclick = function(){
        mostrarSaludo();
    }
});

function mostrarSaludo(){
    alert("Hola! Soy el div")
};