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
    const oldTodos = getStore('todos', localStorage);
    const todo = document.getElementById('addTodo').value;
    const newTodos = typeof oldTodos == Object ? [...oldTodos, todo] : [todo];

    const list = document.querySelector('ul');
    
    setStore('todos', newTodos, localStorage)
    list.innerHTML = renderList()
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