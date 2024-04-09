import { JwtAdapter, bcryptAdapter } from "../../config";
import { UserModel } from "../../data";
import { CustomError, RegisterUserDto, UserEntity,LoginUserDto } from "../../domain";


export class AuthServices{


  constructor(){

  }
  
  public async  registerUser( registerUserDto: RegisterUserDto ){

    const existUser = await UserModel.findOne({ email: registerUserDto.email})

    if( existUser ) throw CustomError.badRequest('Email Already exist')
    
    try {
      const user = new UserModel(registerUserDto)

      // encriptar la contrasena de login
      user.password = bcryptAdapter.hash( user.password )
      await user.save();
      // JWT <=========== LA AUTENTICACION DE USUARIO 

      //  EMAIL DE CONFIRMACION 
      const { password, ...userEntity } = UserEntity.fromOnject( user );


      return { ...userEntity, token:'ABC' };  
    } catch (error) {
      throw CustomError.internalServer(`${ error }`)
    }
  
  }

  
  public async  loginUser( loginUserDto: LoginUserDto ){ 


    // findone para verificar si existe
    const user = await UserModel.findOne( { email: loginUserDto.email} );

    if( !user ) throw CustomError.badRequest('Email not existe');
    
    const isMatching = bcryptAdapter.compare( loginUserDto.password, user.password ); 

    if(!isMatching) throw CustomError.badRequest('Password is not  valid');	

    const { password, ...userEntity } = UserEntity.fromOnject( user )

    const token = await JwtAdapter.generateToken({ id:user.id });

    if ( !token ) throw CustomError.internalServer( 'Error while creating JWT' )

    return {
      user:{ ...userEntity },
      token:token
    }
  }

}