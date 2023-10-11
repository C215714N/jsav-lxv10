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
    field = Object.assign(document.createElement(field), {...props, type } )
    element.append(label, field)
    // Devuelve el campo y su etiqueta de ser necesaria
    return element;
}
export default Field;