import { Request, Response } from "express"
import { CreateCategotyDto, CustomError, PaginationDto } from "../../domain"
import { CategoryService } from "../services/category.services"



export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService,
  ) {}




  private handleError = ( error:unknown, res: Response) =>{
    if( error instanceof CustomError){
      return res.status( error.statusCode).json({ error: error.message})
    }

    console.log(`${ error }`)
    return res.status(500).json({ error: 'Internal server error '})
  }

  createCategory = ( req: Request, res: Response )=>{

    const [error, createCategoryDto] = CreateCategotyDto.create( req.body )
    if ( error ) return res.status(400).json({ error })


    this.categoryService.createCategory( createCategoryDto! , req.body.user )
      .then( category => res.status(200).json({ category }))
      .catch( err => this.handleError( err,res ))

    
  }
  
  getCategory = async ( req: Request, res: Response )=>{

    const { page=1, limit=10} = req.query

    const [ error, paginationDto ] = PaginationDto.create( +page, +limit )

    if ( error ) return res.status(400).json({ error })
    
    this.categoryService.getCategories( paginationDto!)
      .then( categories => res.json( categories ) )
      .catch( err => this.handleError( err, res))
  }
  
}