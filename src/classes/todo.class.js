
export class Todo{

    // Crea la instacia cuando lee del localStorage
   static fromJson ({id , tarea, completado , creado}) {
     
    const tempTodo = new Todo(tarea);
     
     tempTodo.id = id;
     tempTodo.creado = creado;
     tempTodo.completado = completado;

    return tempTodo;   
   } 






    // Original
    constructor (tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
        
    }

// esto para mostrar la diferencia de Arreglo e Instancia
    imprimirClase(){
        //console.log('imprimirclase');
       //console.log(`${this.tarea} - ${this.id}`);
    }
}