import { Router } from 'express';
import { AuthController } from './controller';
import { AuthServices } from '../services/auth-services';
import { EmailService } from '../services/email-services';
import { envs } from '../../config'




export class AuthRoutes {


  static get routes(): Router {

    const router = Router();

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY,
      envs.SEND_EMAIL
      );
    const authService = new AuthServices( emailService );

    
    const controller = new AuthController( authService )


    // Definir las rutas
    router.post('/login', controller.loginUser );
    router.post('/register', controller.registerUser );
    router.get('/validate-email/:token', controller.validateEmail );



    return router;
  }


}

