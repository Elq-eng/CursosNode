// crear la enumeracion
export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export class LogEntity {
  // crear las variables
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;

  constructor(
    // injectar dependencias
    message: string,
    level: LogSeverityLevel
  ) {
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
  }

  static fromJson = ( json: string ):LogEntity => {
    const { message, level, createdAt } = JSON.parse(json)

    const log = new LogEntity( message, level )
    log.createdAt = new Date(createdAt)
  
    return log
  }
}
