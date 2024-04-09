import { Router } from 'express';
import { FileUploadController } from './controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { FileUploadService } from '../services/file-upload.services';
import { FileUploadMiddleware } from '../middlewares/file-upload.middleware';
import { TypeUploadMiddleware } from '../middlewares/type.middleware';



export class FileUploadRoutes {


  static get routes(): Router {

    const router = Router();
    
    const controller = new FileUploadController( new FileUploadService() )



    router.use( FileUploadMiddleware.containFiles );
    router.use( TypeUploadMiddleware.validTypes(["users", 'products', 'categories']) );
    // Definir las rutas
    // api/upload/multiple/<user| category| product >
    // api/upload/single/<user| category| product >
    router.post('/single/:type', controller.uploadFile  );
    router.post('/multiple/:type', [ AuthMiddleware.validateJWT ] ,controller.uploadMultileFiles );



    return router;
  }


}

