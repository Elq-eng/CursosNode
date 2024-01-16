import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-services";



export class Server{

  public static start(){

    CronService.createJob('*/5 * * * * *', ()=>{
      const url = 'https://google.com'

      new CheckService(
        () => console.log( 'success' ),
        ( error )=> console.log( error )
      ).execute( url )
      // new CheckService().execute('http://localhost:3000/posts')


    })

    CronService.createJob('*/2 * * * * *', ()=>{
      const date = new Date();
      console.log('2 seconds')
    })

    CronService.createJob('*/3 * * * * *', ()=>{
      const date = new Date();
      console.log('3 seconds')
    })

  }
}