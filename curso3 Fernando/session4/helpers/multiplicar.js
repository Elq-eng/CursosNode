const fs = require('fs');
const colors = require('colors')


const crearArchivo = async ( base,listar, limit ) => {

    if(listar !== false){

      try
      {
          let salida = "";
        
          for (let i = 0; i <= limit; i++) {
            salida += `${base} x ${i} =  ${base * i}\n`;
          }
        
          fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
          console.log("🚀 salida".bgGreen, colors.blue(salida));

          return( `se ha crearArchivo con el nombre ${ base }.txt` )
      }
      catch (e) {
        throw e
      }
    }
    return( 'No tiene ela rgumento L' )

    

};



module.exports = {
  crearArchivo
}