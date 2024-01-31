import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


// cuando es abstracto no permite crear objetos
export abstract class LogDataSource {
  abstract saveLog( log:LogEntity ): Promise<void>;
  abstract getLog( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>;
}