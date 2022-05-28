
import './styles.css';


//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list.class';

import{Todo , TodoList} from './classes'
import { crearTodoHtml } from './js/componente';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);


const newTodo = new Todo('Aprender JavaScript');
//todoList.nuevoTodo(newTodo);

//todoList.todos[0].imprimirClase();  // No funciona cuando no se cargaron las  instancias
//newTodo.imprimirClase(); 
//console.log('todos', todoList.todos); // Al ver los Todo los cargados de Local Storage no son Instancias pero este ultimo "newTodo" si es una instancia

//-------- Abreviacion ------
// todoList.todos.forEach(crearTodoHtml);
// Arriba se abrevio
//todoList.todos.forEach(element =>  crearTodoHtml(element) );
// Arriba se abrevio 
/* 
todoList.todos.forEach(element => {
    crearTodoHtml(element);   
});
 */



//----------- Aca se cargo al Inicio el desarrollo una Tarea------------------------------
/* 
const tarea =  new Todo('Aprender JacaScript!!!');
todoList.nuevoTodo(tarea);
crearTodoHtml (tarea);

 */



// --------------- Uso de localStorage y sessionStorage  ----------------------
/* 
localStorage.setItem('mi-key','ABC123');
setTimeout( ()=>{
    localStorage.removeItem('mi-key')
} ,2000); 

sessionStorage.setItem('otrodato','XYZ987');
*/


