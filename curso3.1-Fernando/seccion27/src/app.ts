import { createServer } from 'http';
import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import { WssService } from './presentation/services/wss.services';
import { env } from 'process';


(async()=> {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT
  });

  const httpServer = createServer( server.app )
  WssService.initWss({ server: httpServer})

  server.setRoutes( AppRoutes.routes)


  httpServer.listen( envs.PORT,()=>{
    console.log(`Server Runnning on port : ${ envs.PORT}`)
  } );


}