// Importaciones
import Login from './login.js';

// IIFE (Inmediatly Invoked Function Expression)
( function(){
    document.addEventListener('DOMContentLoaded', () => {
        const root = document.getElementById('root');
        let isLogged = sessionStorage.getItem('username');

        if(isLogged){
            root.innerHTML = `<h1>Bienvenido ${isLogged}</h1>`
            return;
        }
        else {
            root.append(Login());
        }
    } )
})()