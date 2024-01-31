import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
  execute( url: string ): Promise<boolean>;
}

// dos tipos de callbacks una sin arg y la otra con arg string
type SuccessCallback = (() => void) | undefined;
type ErrorCallback = (( error: string ) => void) | undefined;



export class CheckService implements CheckServiceUseCase {

  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ){}

  public async execute( url:string ):Promise<boolean>{

    try {
      const req = await fetch( url );
      if( !req.ok ){
        throw new Error(`Erron on check services ${ url }`)
      }

      const log = new LogEntity(`Service ${ url } working `, LogSeverityLevel.low)
      this.logRepository.saveLog( log )
      this.successCallback && this.successCallback()
      return true
      
    } catch (error) {

      const errorMessage = `${ error }`
      const log = new LogEntity( errorMessage, LogSeverityLevel.high)
      this.logRepository.saveLog( log )
      this.errorCallback && this.errorCallback( errorMessage )
      return false
    }
  }


}