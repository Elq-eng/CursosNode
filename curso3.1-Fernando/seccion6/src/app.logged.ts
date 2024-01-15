import fs from 'fs'
import { yarg  } from './config/plugins/args.plugins';

const { b:base, l:limit, s:showTable } = yarg;

let outputMessage = '';
const headerMessage = `
=============================
    Tabla del ${ base }
=============================
`



outputMessage = headerMessage + outputMessage

if( showTable ) console.log(outputMessage)
