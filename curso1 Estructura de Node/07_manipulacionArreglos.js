/**
 * manipulacion arreglos
 */

// Foreache
var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

// console.log(letras.length);

// for (let i = 0; i < letras.length; i++) {
//     const element = letras[i];
//     console.log(element);
// }

letras.forEach((element) => {
    console.log(element);
})

// compactar la funcion de la
letras.forEach((element) => console.log(element))



//  push pop shift 
// push para agregat 
var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
letras.push('M');
console.log(letras)

// elimino la ultima posicion del array 
var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
var lasted = letras.pop();
console.log(letras)
console.log(lasted);
// shift elimina la primera posicion del array 
var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
var firts = letras.shift();
console.log(letras)
console.log(firts);

// manipulacion con map 
var estudiantes = ['Elquin', 'Maria', 'Juan']
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})

console.log(estudiantes);
console.log(asistencia);

//  otro ejemplo con map 
productos = [
    { nombre: 'camiseta', precio: 20 },
    { nombre: 'pantalon', precio: 24 },
    { nombre: 'zapatillas', precio: 26 }

]

var productoImpuesto = productos.map((producto) => {
    return {
        ...producto,
        impuesto: .12
    }
})

console.log(productos);
console.log(productoImpuesto);


//  filter

var estudiantes = [
    { nombre: 'Ada', edad: 20, matriculado: true },
    { nombre: 'Karina', edad: 24, matriculado: true },
    { nombre: 'karen', edad: 25, matriculado: true },
    { nombre: 'Julieth', edad: 26, matriculado: true },
    { nombre: 'Lizeth', edad: 20, matriculado: true }

]

var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21)

console.log(filtrado)

// reduce

var calificaciones = [1, 2, 3, 4, 5];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0)
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 25, 25, 41, 5, 48, 52, 58]

var result = edades.reduce((acumulador, edad) => {


    if (!acumulador[edad]) {
        acumulador[edad] = 1
    } else {
        acumulador[edad] += 1
    }
    return acumulador
}, {})
console.log(edades);
console.log(result);


// -----------------------------------
var ventas = [
    { nombre: 'camiseta', precio: 20, totalVendido: 10 },
    { nombre: 'pantalon', precio: 24, totalVendido: 1 },
    { nombre: 'zapatillas', precio: 26, totalVendido: 0 }

]
var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = totalVentas;
    return acumulador;
}, {})

console.log(ventas);
console.log(resultado);




// --**-----------------------------------------------------------------
var estudiantes = [
    { nombre: 'Ada', edad: 20, matriculado: true },
    { nombre: 'Karina', edad: 24, matriculado: true },
    { nombre: 'karen', edad: 25, matriculado: false },
    { nombre: 'Julieth', edad: 26, matriculado: true },
    { nombre: 'Lizeth', edad: 20, matriculado: true }

]

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, item) => {
        if (item) {
            acumulador.matriculado += 1
        } else {
            acumulador.noMatriculado += 1
        }
        return acumulador
    }, { matriculado: 0, noMatriculado: 0 })

console.log(resultado)


//-------some and every-------------------------------
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var resultado = numeros.some((numero) => numero % 2 === 0)
console.log(resultado)


// ----------------- every -------------------------
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var resultado = numeros.every((numero) => numero % 2 === 0)
console.log(resultado);

// find ----- findIndex 
// find buscar que un elemento cumpla con alguna descripcion
var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Marta' },
    { id: 3, nombre: 'Eide' },
    { id: 4, nombre: 'Diana' },
    { id: 4, nombre: 'Tatiana' }

]

var cliente = clientes.find((cliente) => {
    cliente.id === 1
    return cliente
})

console.log(cliente);
console.log(clientes);


// findIndex retorna la posicion de lños arrys
var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Marta' },
    { id: 3, nombre: 'Eide' },
    { id: 4, nombre: 'Diana' },
    { id: 4, nombre: 'Tatiana' }

]

var cliente = clientes.findIndex((cliente) => {
    cliente.id === 1
    return cliente
})

console.log(cliente);
console.log(clientes);

// includes----------------------------------
// determina si en un arreglo existe algun datos especifico
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('perro')

console.log(resultado);
console.log('prueba de todo'.includes('p'));

var buscador = (parametro) => {

    let clientes = [
        { id: 1, nombre: 'Ada' },
        { id: 2, nombre: 'Marta' },
        { id: 3, nombre: 'Eide' },
        { id: 4, nombre: 'Diana' },
        { id: 4, nombre: 'Tatiana' }

    ]
    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}

console.log(buscador('a'));

// metodo join ----------------------------------------------------------
// unir todos los elementos de un arreglo y crea un string con todos los datos

var elementos = ['aire', 'fuego', 'agua']
var resultado = elementos.join(' ');
console.log(resultado);

var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Marta' },
    { id: 3, nombre: 'Eide' },
    { id: 4, nombre: 'Diana' },
    { id: 4, nombre: 'Tatiana' }

]

var csvGeneral = (array, separator = ',') => {

    let data = array.map((element) => Object.values(element).join(separator))

    data.forEach(element => console.log(element))


}

csvGeneral(clientes)


// concat -----------------------------------
// concatenar los arreglos 
var array1 = [1, 2, 3, 4, 5]
var array2 = [6, 7, 8, 9, 10, 11]

var array3 = array1.concat(array2)

console.log(array3);

// sort ----------------------------------
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1.sort());

var array = [1, 1000, 21, 30, 4]
var ordenado = array.sort((a, b) => a + b)
console.log(ordenado);

// splice ----------------------------------
// leer o modificar, remover elementos dentro del arreglo
var nombre = ['name', 'Giovany', 'Dayana'];
nombre.splice(0) // (desde donde inicia la eliminacion de elementos, hasta donde los quiere eliminar, parametro de remmplazar por algun variable)
console.log(nombre);

// slice ------------------------------
// retorna una copia del array se}
var nombre = ['name', 'Giovany', 'Dayana'];
var resultado = nombre.slice(1, 2) //(desde donde inicia la copia, hasta donde termina la copia)

console.log(resultado);