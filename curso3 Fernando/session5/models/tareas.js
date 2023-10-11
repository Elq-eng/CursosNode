
const Tarea = require('./tarea')

class Tareas {

    _listado = {}

    get listadoArr(){
      const listado = []
      Object.keys(this._listado).forEach( key => {
        listado.push( this._listado[key] )
      })
      return listado
    }

    constructor(){
      this._listado = {}
    }

    crearTarea( desc = '' )
    {
      const tarea = new Tarea(desc)
      this._listado[tarea.id] = tarea
    }

    cargarTareaFromArray( tareas = []){

      tareas.map( tarea => {
        this._listado[tarea.id] = tarea;
      });
    }

    listadoCompleto(){
      
      console.log();
      this.listadoArr.forEach( (tarea,index) =>{

        const idx = `${index + 1}`.green;
        const { desc, completadoEn } = tarea;
        const estado = ( completadoEn ) ? 'Completada'.green : 'Pendiente'.red

        console.log( idx + '.' +  desc + '::' + estado);
      })

    }

    listarPendienteCompletadas( completadas = true ) {
      console.log();
      let contador = 0


      
      this.listadoArr.forEach( (tarea ) =>{

        const { desc, completadoEn } = tarea;
        const estado = ( completadoEn ) ? 'Completada'.green : 'Pendiente'.red

        if( completadas ){
          
          if( completadoEn ){
            contador += 1
            console.log( `${ contador.toString().green}` + '.' +  desc + '::' + estado);
          }
        }else {


          if( !completadoEn ){
            contador += 1
            console.log( `${ contador.toString().green}` + '.' +  desc + '::' + estado);
          }
        }
      })
    }

    borrarTarea( id = '') {
      if( this._listado[id]){
        delete this._listado[id];
      }
    }

    toogleCompletada( ids = []){

      ids.forEach(id =>{

        const tarea= this._listado[id];
        if (!tarea.completadoEn) {
          tarea.completadoEn = new Date().toISOString();
        }

        this.listadoArr.forEach( tarea =>{
          
          if( !ids.includes(tarea.id)){
            this._listado[tarea.id].completadoEn = null
          }
        })

      })

    }


}

module.exports = Tareas;