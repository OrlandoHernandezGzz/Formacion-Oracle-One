import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const input = document.querySelector("[data-form-input]");
const btn = document.querySelector("[data-form-btn]");
const list = document.querySelector("[data-list]");


const createTask = (event) => {
    // Impide el funcionamiento que tiene por defecto el form.
    event.preventDefault();

    // Recuperando el valor del input.
    const value = input.value;


    // Generando plantilla.
    const task = document.createElement("li");
    task.classList.add("card");

    const taskContent = document.createElement("div");
    task.appendChild(taskContent);
    taskContent.appendChild(checkComplete());

    // Creamos spam y le asignamos el valor
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;

    taskContent.appendChild(titleTask);
    task.appendChild(deleteIcon());

    // Agregando todo al elemento padre.
    list.appendChild(task);

    // Limpiando y enfocando el texto.
    input.value = "";
    input.focus();
}


// EVENTOS.
btn.addEventListener("click", createTask);