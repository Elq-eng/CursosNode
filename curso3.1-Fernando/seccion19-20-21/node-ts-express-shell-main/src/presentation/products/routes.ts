import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { ProductsController } from './controller';
import { ProductService } from '../services/product.services';





export class ProductsRoutes {


  static get routes(): Router {

    const router = Router();
    const productServices = new ProductService()

    const controller = new ProductsController( productServices  );


    // Definir las rutas
    router.get('/', controller.getProducts );
    router.post('/', [ AuthMiddleware.validateJWT ] ,controller.createProducts );



    return router;
  }


}

