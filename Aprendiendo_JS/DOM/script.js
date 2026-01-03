//Empezamos a trabajr en la pagina con JS}

let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    titulo.textContent = "Hola Ricardo";
    titulo.style.color = "blue";
});
