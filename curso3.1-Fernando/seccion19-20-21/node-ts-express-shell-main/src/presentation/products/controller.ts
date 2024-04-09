import { Request, Response } from "express"
import { CreateCategotyDto, CustomError, PaginationDto } from "../../domain"
import { CreateProductDto } from "../../domain/dtos/products/create-product.dto"
import { ProductService } from "../services/product.services"



export class ProductsController {

  constructor(
    private readonly productService: ProductService,
  ) {}




  private handleError = ( error:unknown, res: Response) =>{
    if( error instanceof CustomError){
      return res.status( error.statusCode).json({ error: error.message})
    }

    console.log(`${ error }`)
    return res.status(500).json({ error: 'Internal server error '})
  }

  createProducts = ( req: Request, res: Response )=>{

    const [error, createProductDto] = CreateProductDto.create( { ...req.body,
    user: req.body.user.id } )
    if ( error ) return res.status(400).json({ error })

    this

    this.productService.createProduct( createProductDto! )
      .then( product => res.status(200).json({ product }))
      .catch( err => this.handleError( err,res ))

    
  }
  
  getProducts = async ( req: Request, res: Response )=>{

    const { page=1, limit=10} = req.query
    const [ error, paginationDto ] = PaginationDto.create( +page, +limit )
    if ( error ) return res.status(400).json({ error })
    
    this.productService.getProducts( paginationDto!)
      .then( products => res.json( products ) )
      .catch( err => this.handleError( err, res))
  }
  
}