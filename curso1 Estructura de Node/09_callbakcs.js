// callbacks 
//  permite llamar una funcion padre al terminar llama la siguiente funcion hijo
// funciones que se pasan como parametros a otras funciones

const suma = (a, b, cb) => {
    cb(a + b)
}

const imprimir = (data) => console.log(data);

suma(1, 2, imprimir)


// otro ejemploooooooooo----------------------------------------------------
const getData = (cb, cbError) => {
    if (false) {

        setTimeout(() => {
            cb({
                nombre: 'Pedro',
                apellido: 'Cascavota'
            })
        }, 3000);
    } else {
        cbError(new Error('No se pudo obtener los datos'))
    }
}

const imprimirData = (data) => console.log(data);
const errorHandler = (err) => console.log(err);
getData(imprimirData, errorHandler)