function Login(){
    // Crea el Formulario
    const form = document.createElement('form');
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
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sessionStorage.setItem('username', document.querySelector('[name*="usuario"]').value)
    } )
    // Devuelve el Formulario
    return form;
}

function Field(type, props){
    const element = document.createDocumentFragment();
    let field, label = '';
    // Determina la etiqueta a utilizar
    switch (type){
        case 'textarea':
            field = 'textarea';
        break;
        case 'select':
            field = 'select';
        break;
        case 'button':
        case 'submit':
        case 'reset':
            field = 'button';
        break;
        default:
            field = 'input';
    }
    
    if(field != 'button') {
        label = Object.assign(document.createElement('label'), {
        forHTML: props.name,
        innerHTML: "Ingrese su " + props.name })
    }
    field = Object.assign(document.createElement(field), {...props, type: type } )

    element.append(label, field)
    // Devuelve el campo y su etiqueta de ser necesaria
    return element;
}

export default Login;