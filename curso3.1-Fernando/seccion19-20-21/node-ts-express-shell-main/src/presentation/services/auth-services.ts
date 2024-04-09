import { JwtAdapter, bcryptAdapter, envs } from "../../config";
import { UserModel } from "../../data";
import { CustomError, RegisterUserDto, UserEntity,LoginUserDto } from "../../domain";
import { EmailService } from "./email-services";


export class AuthServices{


  constructor(
    private readonly emailService: EmailService
  ){

  }
  
  public async  registerUser( registerUserDto: RegisterUserDto ){

    const existUser = await UserModel.findOne({ email: registerUserDto.email})

    if( existUser ) throw CustomError.badRequest('Email Already exist')
    
    try {
      const user = new UserModel(registerUserDto)

      // encriptar la contrasena de login
      user.password = bcryptAdapter.hash( user.password )
      await user.save();
      

      //  EMAIL DE CONFIRMACION 
      this.sendEmailValidationLink( user.email)
      
      const { password, ...userEntity } = UserEntity.fromOnject( user );

      const token = await JwtAdapter.generateToken({ id:user.id });
      if ( !token ) throw CustomError.internalServer( 'Error while creating JWT' )
  

      return { ...userEntity, token:token };  
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

  private sendEmailValidationLink = async ( email:string )=>{


    const token = await JwtAdapter.generateToken({ email });
    if ( !token ) throw CustomError.internalServer( 'Error while creating JWT' )

    const link = `${ envs.WEBSERVICE_URL }/auth/validate-email/${ token }`;

    const html = `
      <h1> Validate your email </h1>
      <p> click on the following link to validate your email </p>
      <a href="${ link }">Validate your email: ${ email }</a>
    `;

    const options = {
      to: email,
      subject: 'Validate your email',
      htmlBody: html
    }

    const isSent = await this.emailService.sendEmail( options )
    if( !isSent ) throw CustomError.internalServer('Error sendig email');

    return true;


  } 

  public validateEmail = async ( token:any  )=>{

    const payload = await JwtAdapter.validateToken( token );
    if( !payload ) throw CustomError.unauthorized('Token not valid')

    const { email } = payload as { email:string };
    if( !email ) throw CustomError.internalServer('Email not in token')
    
    const user = await UserModel.findOne({ email });
    if( !user ) throw CustomError.internalServer('Email not exist')

    user.emailValidated = true;
    await user.save();

    return true



  }

}