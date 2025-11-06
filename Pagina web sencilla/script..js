// Referencias a elementos del DOM
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Cargar tareas guardadas al iniciar
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Evento para agregar tarea
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return alert("Por favor escribe una tarea");

  const task = { text, completed: false };
  tasks.push(task);
  saveTasks();
  renderTasks();
  input.value = "";
}

// Mostrar las tareas en pantalla
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    // Marcar completado
    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    // Botón eliminar
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("delete");
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Guardar en localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
