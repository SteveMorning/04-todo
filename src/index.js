
import './styles.css';


//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list.class';

import{Todo , TodoList} from './classes'
import { crearTodoHtml } from './js/componente';



export const todoList = new TodoList();
const tarea =  new Todo('Aprender JacaScript!!!');
const tarea2 =  new Todo('Comprar unicornio');


todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

// tarea.completado = true;

console.log(tarea);
console.log(todoList);

crearTodoHtml (tarea);
crearTodoHtml (tarea2);