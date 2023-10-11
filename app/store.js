// Leer elemento del Almacen
export const getStore = (k, store = sessionStorage) =>
    JSON.parse(store.getItem(k))
// Agregar elemento al Almacen
export const setStore = (k, v, store = sessionStorage) =>
    store.setItem(k, JSON.stringify(v))
// Eliminar elemento del Almacen
export const remStore = (k, store = sessionStorage) =>
    store.removeItem(k)