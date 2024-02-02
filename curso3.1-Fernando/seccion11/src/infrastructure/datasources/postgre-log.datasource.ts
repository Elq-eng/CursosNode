import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDataSource } from "../../domain/datasources/log.datasources";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

const primaClient = new PrismaClient()


const severityEnum = {
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
  high: SeverityLevel.HIGH
}

export class PostgresLogDataSource extends LogDataSource {

  

  async saveLog(log: LogEntity): Promise<void> {
    const level = severityEnum[ log.level ]
    const newLog = await primaClient.logModel.create({
      data:{
        ...log,
        level:level,
      }
    });

  }
  
  
  async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const level = severityEnum[ severityLevel ]
    const dbLogs = await primaClient.logModel.findMany({
      where:{ level }

    })
    return dbLogs.map ( LogEntity.fromObject )
  }
}