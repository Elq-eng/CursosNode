/**
 * Operadores de asignacion
 */


// asginacion 
var x = 2;
var y = true;
//  operador de asignacion de adicion (+=)

var x = 2
var y = 1
x += y
console.log(x);

// operador de asignacion de suscriotion(-=)
var x = 1;
var y = 2;
x -= y

// operador de asignacoin multiplicacion (*=)
var x = 1;
var y = 2;

x *= y
console.log(x);

// operador de asignacoin division (/=)
var x = 1;
var y = 2;

x /= y
console.log(x);

// operador de asignacoin division (%=)
var x = 1;
var y = 2;

x %= y
console.log(x);

// comparadores 
// igual que
console.log(3 == 3);
// diferente de 
console.log(3 != 3);

// operador estrictamente igual que
console.log(3 === '3')

// operador estrictamente deigual que
console.log(3 !== '3')


// operadores aritmeticos
// +-*/%

// operadores de incremente y drecremento (++/--)
var numero = 0;
console.log(++numero); //<--------- incrementa antes de usar
console.log(numero++); //<--------- incrementa despues de usar

// operadores logicos incremente

// and  &&
console.log(true && true);

// or ||
console.log(true || false);
console.log(false || false);

// not !
console.log(!true);

// operadores de cadena o concatenacion

var nombre = 'Elquin'
var apellido = 'cascavita'
var nombreCompleto = nombre + apellido
console.log(nombreCompleto);


// operador condicional (condicion ? val : val2)
console.log(2 > 3 ? 'Es mayor' : 'es menor');

// oprador de destructuracion division
var persona = {
    nombre: 'Elquin',
    apellido: 'Apellido'
}

var { nombre } = persona;
console.log(nombre);

var { nombre, apellido } = persona

// para cambiar el nombre 
var { nombre: name, apellido } = persona
console.log(name);


// desestructuracion en arreglos 
var arreglo = [1, 2, 3, 4, 5];

var [primeraPosicion] = arreglo;
console.log(primeraPosicion);


// Operador de miembro o acceso de propiedad

// notacion punto
var persona = {
    nombre: 'Elquin',
    Apellido: 'Cascavita'
}
console.log(persona.nombre);

// Notacion por corchetes 
var persona = {
    nombre: 'Elquin',
    Apellido: 'Cascavita'
}
console.log(persona['nombre']);

// Operador de derterminacion de tipo de(type of)

console.log(typeof 'Gabriel');