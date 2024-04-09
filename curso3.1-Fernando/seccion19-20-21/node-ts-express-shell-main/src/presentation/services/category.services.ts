import { CategoryModel } from "../../data";
import { CreateCategotyDto, CustomError, PaginationDto, UserEntity } from "../../domain";





export class CategoryService {


  constructor(){}

  async createCategory( createCategotyDto: CreateCategotyDto,  user: UserEntity ){
    
    
    const categoryExists = await  CategoryModel.findOne({ name: createCategotyDto.name });
    if( categoryExists ) throw CustomError.badRequest('Category already exists');
    
    try{

      const category = new CategoryModel({
        ...createCategotyDto,
        user: user.id
      })

      await  category.save();

      return {
        id: category.id, 
        name: category.name,
        available: category.avalable,
      }

    }catch( error ){
      throw CustomError.internalServer(`${ error }`)
    }
  }

  async getCategories( paginationDto: PaginationDto  ){

    const { page, limit } = paginationDto

    try {
      
      const categories = await CategoryModel.find()
        .skip( (page - 1) * limit)
        .limit( limit );
      const total = await CategoryModel.countDocuments();

      const [ ] = await Promise.all([
        CategoryModel.countDocuments(),
        CategoryModel.find()
        .skip( (page - 1) * limit)
        .limit( limit )
      ])


      return {
        total,
        page: page,
        limit: limit,
        next: `/api/categories?page=${ ( page + 1) }&limit=${ limit }`,
        prev: ( page - 1 > 0 ) ? `/api/categories?page=${ (page - 1) }&limit=${ limit }`: null,
        categories: categories.map( category =>({
        id: category.id,
        name: category.name,
        available: category.avalable

      }))}


    } catch (error) {
      
      throw CustomError.internalServer(`Internal server error ${ error }`)

    }
  }


}