const argv = require('yargs')
                  .option( 'b' ,{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de multiplicar'
                  })
                  .option( 'l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false
                  })
                  .option( 'lim',{
                    alias: 'limit',
                    type: 'number',
                    demandOption: false,
                    default: 10
                  })
                  .check( ( argv ) => {
                    if( isNaN(argv.b) ){
                      throw 'La base tiene que ser un numero'
                    }
                    return true;
                  })
                  .argv

module.exports = argv