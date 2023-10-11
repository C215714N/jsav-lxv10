import { setStore } from './store.js';
import Field from './field.js';

function Login(){
    // Crea el Formulario
    const form = Object.assign(document.createElement('form'),{
        id: 'login',
        className: 'login',
    });
    // Agrega los Campos
    form.append(
        Field('text', {
            name: 'usuario',
            minLength: 5,
            maxLength: 20,
            required: true,
        }), 
        Field('password', {
            name: 'constraseña',
            minLength: 8,
            required: true,
        }), 
        Field('submit', {
            className: 'btn btn-primary',
            innerText: 'Registrarse'
        })
    );
    form.addEventListener('submit', (e) => save(e) )
    // Devuelve el Formulario
    return form;
}

function save(e){
    e.preventDefault()
    setStore('username', document.querySelector('[name*="usuario"]').value);
    window.location.reload()
    window.history.pushState('profile', '', '/profile')
}

export default Login;