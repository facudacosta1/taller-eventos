document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("boton-saludar").onclick = function(){
        mostrarAlerta();
    };
    
    function mostrarAlerta(){
        alert("Hola!");
    }
});
