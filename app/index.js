// Importaciones
import { d, root } from './global.js';
import { getStore } from './store.js';
import Login from './login.js';
import Todos from './todos/index.js';

// IIFE (Inmediatly Invoked Function Expression)
( function(){
    d.addEventListener('DOMContentLoaded', () => {
        let isLogged = getStore('username');

        if(isLogged) Todos(isLogged)
        else root.append(Login());
    } )
})()