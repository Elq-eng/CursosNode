const argv = require('./config/yargs');
const colors = require('colors')
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();


const { base, listar, limit } = argv


crearArchivo( base, listar, limit )
  .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch( err => console.log(err, 'se genero un error') )
