
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export const yarg = yargs(process.argv)
  .option('b',{
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplacation table base'
  })
  .option('l',{
    alias:'list',
    type: 'number',
    default: 10,
    describe: 'Multiplacation table list'
  })
  .option('s',{
    alias:'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplacation table'
  })
  .option('n',{
    alias:'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
  })
  .option('d',{
    alias:'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
  })
  .check(( argv, options ) => {
    if( argv.b < 1 ) throw 'Error: base must be a number';
    return true
  })
  .parseSync()