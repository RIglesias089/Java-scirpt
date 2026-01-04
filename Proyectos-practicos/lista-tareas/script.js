//Ahora si haremos uso de las cosas que hemos aprendido hasta el "DOM-dinamico" para poder realizar el agregado de tareas 
//primero debemos hacer que JS lea los datos que tenemos en el HTML
let input = document.getElementById("tareaInput");
let boton = document.getElementById("agregarBtn");
let lista = document.getElementById("listaTareas");

//Ahora editamos el boton
boton.addEventListener("click", function () {
    let texto = input.value;

    if (texto === "") {
        alert("Escribe una tarea");
        return;
    }

    let tarea = document.createElement("li");
    tarea.textContent = texto;

    tarea.addEventListener("click", function () {
        tarea.style.textDecoration = "line-through";
    });

    tarea.addEventListener("dblclick", function () {
        lista.removeChild(tarea);
    });

    lista.appendChild(tarea);
    input.value = "";
});
