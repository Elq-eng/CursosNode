

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


// cuando es abstracto no permite crear objetos
export abstract class LogRepository {
  abstract saveLog( log:LogEntity ): Promise<void>;
  abstract getLog( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>;
}