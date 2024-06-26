import jwt from "jsonwebtoken";
import { envs } from "./envs";

const JWT_SEED = envs.JWT_SEED;



export class JwtAdapter {
  static async generateToken(payload: any, duraction: string = "2h") {

    return new Promise((resolve, reject) => {
      jwt.sign(payload, JWT_SEED , { expiresIn: duraction }, (err, token) => {
        if( err ) return  resolve( null );
        resolve( token );
      });
    })
    
  }

  static validateToken(token: string) {

    throw new Error( 'Not implemeted' )

    return;
  }
}
