import fs from 'fs';


export interface SaveFileUseCase {
  execute: ( options: Options ) => boolean
}

export interface Options {
  fileContent:  string;
  fileDestination?: string;
  fileName?:    string;
}


export class SaveFile implements SaveFileUseCase {
  

  constructor(
    /*
    Repository: StorageRepository 
    */
  ){

  }

  execute( {
    fileContent,
    fileDestination = 'output',
    fileName = 'table'
  }: Options ): boolean {
    
    try {
      
      fs.mkdirSync(fileDestination, { recursive: true })
      fs.writeFileSync(`${ fileDestination }/tabla-${ fileName }.txt`, fileContent);

      return true
    } catch (error) {
      return false
    }
   
  
  }



}


