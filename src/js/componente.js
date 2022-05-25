import { todoList } from "..";
import { Todo } from "../classes";
import { TodoList } from "../classes";

// Referecias en el HTML 
const divTodoList = document.querySelector('.todo-list');

const txtInput = document.querySelector('.new-todo');


export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);
    return div;

}

//EVENTOS

// Escucha el tipeo en el input de tareas
txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }

});

// escucha un click en el listado de tareas  
divTodoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName;  // input , label , button
    const todoElemento = event.target.parentElement.parentElement; // ID
    const todoId = todoElemento.getAttribute('data-id');


    if (nombreElemento.includes('input')) { // click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
    else if (nombreElemento.includes('button')) { // borrar la tarea
      todoList.eliminarTodo(todoId);
      divTodoList.removeChild(todoElemento);
    };


});
