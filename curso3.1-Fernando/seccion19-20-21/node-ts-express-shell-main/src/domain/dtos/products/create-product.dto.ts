import { Validators } from "../../../config";




export class CreateProductDto {

  private constructor(
    public readonly name:string,
    public readonly available:boolean,
    public readonly price:number,
    public readonly description:string,
    public readonly user:string,
    public readonly category:string,
  ){}

  static create ( props: {[ key: string ]: any }): [string?, CreateProductDto?]{
    
    console.log(props)
    const { 
      name,
      available,
      price,
      description,
      user,
      category
    } = props;

    console.log(name)

    if ( !name  ) return ['Missing name'];
    if ( !user  ) return ['Missing user'];
    if ( !Validators.isMongoID( user ) ) return ['Invalid user mongo'] 
    if ( !category  ) return ['Missing category'];
    if ( !Validators.isMongoID( category ) ) return ['Invalid category mongo'] 

    return [
      undefined,
      new CreateProductDto(
        name, 
        !!available, 
        price, 
        description, 
        user,
        category)
    ]
  
    }


}