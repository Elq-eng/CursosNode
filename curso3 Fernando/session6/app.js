const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/Busquedad");



const main = async() => {
  
  let opt;
  const busquedas = new Busquedas();

  do{

    opt = await inquirerMenu();
    switch ( opt ) {
      case 1:
        //buscar ciudad 
        const lugar = await leerInput('Ciudad: ')
        await busquedas.ciudad( lugar )
        

        console.log('\n Informacion de la ciudad \n'.green);
        console.log('Ciudad: ',);
        console.log('Lat: ',);
        console.log('Lng: ',);
        console.log('Temp: ',);
        console.log('Maxima: ',);
        console.log('Minima: ',);

      break;
   
    }
    

    if( opt !== 0 ) await pausa()

  }while(opt !== 0)

}

main();