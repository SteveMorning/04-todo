export class TodoList {

    constructor() {
        // this.todos = []; se inicializa en el cargarLocalStorage
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {


        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado(id) {

        for (const todo of this.todos) {
            console.table(id, todo.id);

            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }


    guardarLocalStorage() {
        localStorage.setItem('todoString', this.todos);
        localStorage.setItem('todo', JSON.stringify(this.todos));


    }


    cargarLocalStorage() {

        // Se reemplaza el codigo por el operador ternario
/* 
        if (localStorage.getItem('todo')) {
            // this.todos = localStorage.getItem('todo');  // Asi lee el localstorage 
            this.todos = JSON.parse(localStorage.getItem('todo'));
        } else {
            this.todos = [];
        }
 */

        localStorage.getItem('todo')? this.todos = JSON.parse(localStorage.getItem('todo')) : this.todos = []; 

        // Operador Ternario Correcto
/* 
        this.todos = (localStorage.getItem('todo'))
        ? JSON.parse(localStorage.getItem('todo'))
        : [];
 */

    }

}