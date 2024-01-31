import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repoditories/log-impl.repository";
import { CronService } from "./cron/cron-services";
import { EmailService } from "./email/email.service";


const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);
const emailService = new EmailService( );



export class Server{

  public static start(){


    console.log('Server started')

    new SendEmailLogs(emailService,fileSystemLogRepository).execute(['elquincascavita@gmail.com'])

    // emailService.sendEmailWithFuleSystemLog(
    //   ['elquincascavita@gmail.com']
    // )

    // emailService.sendEmail({
    //   to:'elquincascavita@gmail.com',
    //   subject:'probando los sistemas',
    //   htmlBody:`
    //     <h3>Hola mundo</h3>
    //   `,
    //   attachments:[]
    // })


    // CronService.createJob('*/5 * * * * *', ()=>{
    //   const url = 'https://google.com'
    //   // const url = 'http://localhost:3000/posts'

    //   new CheckService(
    //     fileSystemLogRepository,
    //     // undefined,
    //     // undefined
    //     () => console.log( 'success' ),
    //     ( error )=> console.log( error )
    //   ).execute( url )
    //   // new CheckService().execute('http://localhost:3000/posts')

    // })

    // CronService.createJob('*/2 * * * * *', ()=>{
    //   const date = new Date();
    //   console.log('2 seconds')
    // })

    // CronService.createJob('*/3 * * * * *', ()=>{
    //   const date = new Date();
    //   console.log('3 seconds')
    // })

  }
}