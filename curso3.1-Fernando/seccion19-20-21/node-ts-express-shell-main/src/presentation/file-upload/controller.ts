import { Request, Response } from "express"
import { CustomError } from "../../domain"
import { FileUploadService } from "../services/file-upload.services"
import { UploadedFile } from "express-fileupload"



export class FileUploadController {

  constructor(
    private readonly fileUploadService: FileUploadService
  ) {}




  private handleError = ( error:unknown, res: Response) =>{
    if( error instanceof CustomError){
      return res.status( error.statusCode).json({ error: error.message})
    }

    console.log(`${ error }`)
    return res.status(500).json({ error: 'Internal server error '})
  }

  uploadFile = ( req: Request, res: Response )=>{

    const type = req.params.type;
    const validTypes = ["users", 'products', 'categories'];

    if ( ! validTypes.includes(type)){
      return res.status(400)
        .json({ error: `Invalid Type: ${ type }, valid ones ${ validTypes }`
        })
    }


    

    const file = req.body.files.at(0) as UploadedFile;

    this.fileUploadService.uploadSingle( file, `uploads/${ type }` )
      .then( uploaded => res.json( uploaded ))
      .catch( error => this.handleError(error, res ))
 

  };
  
  uploadMultileFiles = async ( req: Request, res: Response )=>{

    const type = req.params.type;
    
    const files = req.body.files as UploadedFile[];

    this.fileUploadService.uploadMultiple( files, `uploads/${ type }` )
      .then( uploaded => res.json( uploaded ))
      .catch( error => this.handleError(error, res ))




  }
  
}