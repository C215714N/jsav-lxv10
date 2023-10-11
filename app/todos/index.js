import { getStore, setStore } from '../store.js';

const Template = () => `
<main>
    <form>
        <input 
            id="addTodo" 
            type="search" 
            placeholder="buscar"
            min-length="5"
            required>
        <button>Agregar</button>
    </form>
    <ul>
        ${ renderList() }
    </ul>
</main>`

function addtodo(){
    // Captura de Input
    const input = document.getElementById('addTodo');
    // Captura de Lista de Tareas
    const list = document.querySelector('ul');
    // Lectura de Tareas Almacenadas
    const oldTodos = getStore('todos', localStorage);
    // Lectura de Nueva Tarea
    const todo = document.getElementById('addTodo').value;
    // Concatenación de Tareas
    const newTodos = oldTodos ? [...oldTodos, todo] : [todo];
    // Almacenamiento de Tareas
    setStore('todos', newTodos, localStorage)
    // Actualización de Lista de Tareas
    list.innerHTML = renderList()
    input.value = '';
}

function renderList(list = ''){
    const todos = getStore('todos', localStorage);
    if (todos != null ){
        todos.forEach(todo => { list += `<li>${todo}</li>` });
    }
    return list;
}

function Todos(){
    root.innerHTML = Template();
    
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addtodo();
    })
    
}

export default Todos;