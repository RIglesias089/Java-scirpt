//ahora em[pieza lo verdaderamente importante y es el trabajo con JS en la pagina para poder identificar el nombre que ingrese
//el usuario y luego de eso programar lo que pasaara despues de que cumpla ciertas cosas

//Primero leemos el valor de el input que pedimos
let input = document.getElementById("nombreInput");
let boton = document.getElementById("SaludarBtn");
let mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    let nombre = input.value;
    mensaje.textContent = "Hola " + nombre;
});

//Validamos el input 
boton.addEventListener("click", function () {
    let nombre = input.value;

    if (nombre === "") {
        mensaje.textContent = "Por favor escribe tu nombre";
    } else {
        mensaje.textContent = "Hola " + nombre;
    }
});

//Limpiamos el input 
input.value = "";

//Hacemos que el boton de enter tambien sirva y no solo tenga que hacer click
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        boton.click();
    }
});
