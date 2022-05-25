
import './styles.css';


//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list.class';

import{Todo , TodoList} from './classes'
import { crearTodoHtml } from './js/componente';



export const todoList = new TodoList();

/* 
const tarea =  new Todo('Aprender JacaScript!!!');
todoList.nuevoTodo(tarea);
crearTodoHtml (tarea);

 */


// Uso de localStorage y sessionStorage
/* 
localStorage.setItem('mi-key','ABC123');
setTimeout( ()=>{
    localStorage.removeItem('mi-key')
} ,2000); 

sessionStorage.setItem('otrodato','XYZ987');
*/


