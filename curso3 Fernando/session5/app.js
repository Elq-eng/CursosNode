require('colors');

const { guardarDB, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorar,
        confirmar,
        mostrarListadoCheckList } = require('./helpers/inquirer');

const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async() =>{

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDb();

  if( tareasDB ){
    tareas.cargarTareaFromArray( tareasDB )
  }

  

  do {

    opt = await inquirerMenu();
    
    switch ( opt ) {
      case '1':
        //crear option
        const desc = await leerInput('Descripcion: ')
        tareas.crearTarea( desc )
      break;

      case '2':
        tareas.listadoCompleto()
      break;

      case '3':
        tareas.listarPendienteCompletadas()
      break;
      case '4':
        tareas.listarPendienteCompletadas(false)
      break;
      case '5':
        const ids = await mostrarListadoCheckList( tareas.listadoArr )
        tareas.toogleCompletada( ids )
      break;
      case '6':
       const id = await listadoTareasBorar( tareas.listadoArr )
       
       if( id !== '0')
       {
          const ok = await confirmar('Esta seguro')
        if( ok ){
          tareas.borrarTarea( id )
          console.log('Tarea Borrada correctamente');
        }
      }


      break;
    }
    
    
    guardarDB( tareas.listadoArr )

    
    await pausa()

  }while(opt !== '0')

  
}

main();