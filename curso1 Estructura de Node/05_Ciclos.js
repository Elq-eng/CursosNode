/**
 * ciclos 
 */

// while
var contador = 0;
while (contador <= 5) {
    console.log("Hola mundo");
    contador += 1
}

// do while
var contador = 1
do {
    console.log(contador + 'Hola Mundo!');
    contador += 1
} while (contador <= 10)


// for
for (let i = 0; i > 10; i++) {
    console.log('Hola Mundo ');
}

// //  for in 
// for( variable operadorIN objetjto){

// }
let personas = {
    name: 'Elquin',
    apellido: 'Cascavita',
    edad: 24
}
for (let clave in personas) {
    console.log(clave, personas[clave])
}

// for of
// for(let valor of arreglo){

// }
var arreglo = [1, 2, 3, 4, 5]
for (let valor of arreglo) {
    console.log(valor);
}