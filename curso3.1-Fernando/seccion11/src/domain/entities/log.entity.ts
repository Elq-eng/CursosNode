// crear la enumeracion
export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  level: LogSeverityLevel;
  message: string;
  origin: string;
  createAt?: Date;
}



export class LogEntity {
  // crear las variables
  public level: LogSeverityLevel;
  public message: string;
  public createAt: Date;
  public origin: string;

  constructor(
    // injectar dependencias
    options: LogEntityOptions
  ) {

    const { message, level, origin, createAt = new Date() } = options

    this.message = message;
    this.level = level;
    this.createAt = createAt;
    this.origin = origin;
  }

  static fromJson = ( json: string ):LogEntity => {

    json= ( json === '' ) ? '{}': json;

    const { message, level, createAt, origin  } = JSON.parse(json)

    const log = new LogEntity( {
      message, 
      level,
      createAt,
      origin,
    } )
  
    return log
  };

  static fromObject = ( object:{ [ key:string ]: any }): LogEntity => {

    const { message, level, createAt, origin } = object; 

    const log = new LogEntity( {
      message, level, createAt, origin
    }) 

    return log;

  }

}
