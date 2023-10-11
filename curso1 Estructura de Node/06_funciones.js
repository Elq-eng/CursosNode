/** funciones */

// variables declarativas
function nombredelafuncion() {

}


function saludar() {
    console.log('Hola Mundo');
}

function saludar(nombre) {
    return 'Hola soy ' + nombre
}


var result = saludar('Perri');

console.log(result);

// funciones expresion o anonimas

var suma = function(a, b) {
    return a + b;
}
console.log(suma(3, 4));

// funcion flecha o arrow
var restar = (a, b) => {
    return a - b;
}

console.log(restar(4, 5));