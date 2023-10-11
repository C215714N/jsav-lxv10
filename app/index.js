// Importaciones
import { d, root } from './global.js';
import { getStore } from './store.js';
import Login from './login.js';

// IIFE (Inmediatly Invoked Function Expression)
( function(){
    d.addEventListener('DOMContentLoaded', () => {
        let isLogged = getStore('username');

        if(isLogged){
            root.innerHTML = `<h1>Bienvenido ${isLogged}</h1>`
            return;
        }
        else {
            root.append(Login());
        }
    } )
})()