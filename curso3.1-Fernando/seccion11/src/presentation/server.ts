import { envs } from "../config/plugins/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgre-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repoditories/log-impl.repository";
import { CronService } from "./cron/cron-services";
import { EmailService } from "./email/email.service";


const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
  // new MongoDataSource(),
  // new PostgresLogDataSource()
);

const mongoLogRepository = new LogRepositoryImpl(
  // new FileSystemDatasource()
  new MongoDataSource(),
  // new PostgresLogDataSource()
);

const postgreLogRepository = new LogRepositoryImpl(
  // new FileSystemDatasource()
  // new MongoDataSource(),
  new PostgresLogDataSource()
);

const emailService = new EmailService( );



export class Server{

  public static async start(){


    console.log('Server started')

    // const logs = await LogRepository.getLog( LogSeverityLevel.low)
    // console.log(logs)


    // new SendEmailLogs(emailService,fileSystemLogRepository).execute(['elquincascavita@gmail.com'])

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


    CronService.createJob('*/5 * * * * *', ()=>{
      const url = 'https://google.com'
      // const url = 'http://localhost:3000/posts'

      new CheckServiceMultiple(
        [fsLogRepository, postgreLogRepository, mongoLogRepository],
        // undefined,
        // undefined
        () => console.log( 'success' ),
        ( error )=> console.log( error )
      ).execute( url )
    })

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