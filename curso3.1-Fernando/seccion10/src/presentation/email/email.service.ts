import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });


  constructor(
    // private readonly  logRepository: LogRepository,
  ){}

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;

    try {
      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments
      });

      console.log(sentInformation);

      const log = new LogEntity({
        level: LogSeverityLevel.low,
        message:'Email Sent',
        origin:'email.service.ts'
      })

      // this.logRepository.saveLog(log)
      return true;
    } catch (error) {
      console.log(error)
      const log = new LogEntity({
        level: LogSeverityLevel.high,
        message:`${error}`,
        origin:'email.service.ts'
      })

      // this.logRepository.saveLog(log)
      return false;
    }
  }


  async sendEmailWithFuleSystemLog( to:string | string[]){
    
    const subject = 'Logs del servidor'
    const htmlBody = `
      <h1> Hola mundo </h1>
    `;

    const attachments: Attachment[] = [
      {filename:'logs-all.log',path: './logs/logs-all.log'},
      {filename:'logs-medium.log',path: './logs/logs-medium.log'},
      {filename:'logs-high.log',path: './logs/logs-high.log'},
    ]

    return this.sendEmail({
      to,subject,attachments,htmlBody
    })

  }


}
