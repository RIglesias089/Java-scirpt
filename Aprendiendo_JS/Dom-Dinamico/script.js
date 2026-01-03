let input = document.getElementById("texto");
let boton = document.getElementById("agregar");
let lista = document.getElementById("lista");

boton.addEventListener("click", function () {
    let valor = input.value;

    let item = document.createElement("li"); // crear <li>
    item.textContent = valor;               // texto dentro

    lista.appendChild(item);                // agregar a <ul>

    input.value = ""; // limpiar input
});

//Validamos
if (valor === "") {
    alert("Escribe algo");
    return;
}
//Eliminar elementos
item.addEventListener("click", function () {
    lista.removeChild(item);
});
