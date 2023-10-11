import express,{ Application} from 'express'
import * as useRoutes from '../routes/usuarios'
import cors from 'cors'


import db from '../db/connection';


class Server {

  private app: Application
  private port: string;
  private apiPath = {
    usuarios:'/api/usuarios'
  } 

   constructor(){
    this.app = express();
    this.port = process.env.PORT || '3001';

    //conexion bbdd
    this.dbConnection()
    //middleware
    this.middlewares()

    //definir mis rutas
    this.routes()
    
    
  }

  routes(){

    this.app.use( this.apiPath.usuarios , useRoutes.default );
  }

  middlewares(){
    //CORS
    this.app.use( cors())
    
    // LECTURA DEL BODY
    this.app.use( express.json())

    //LECTURA DE CARPETA PUBLICA
    this.app.use( express.static( 'public'))
  }

  async dbConnection(){
    try {
      
      await db.authenticate()
      console.log('database online')
    } catch ( error) {
      console.log( error )
      throw new Error("error en la base de datos");
      
    }
  }


  listen(){
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }

    

}


export default Server
 