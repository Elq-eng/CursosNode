import { Request, Response } from "express"
import { prisma } from "../../data/postgres"
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos"






export class TodosController {


  // * Dependence Injection
  constructor(){

  }

  public getTodos = async (req: Request, res: Response  ) => {

    const todos = await prisma.todo.findMany()

    return res.json(todos)
  }


  public getTodosById = async (req: Request, res: Response) =>{
    
    const id = +req.params.id

    if ( isNaN(id)) return res.status(400).json({ error: 'not found' }); 
    
    const todo = await prisma.todo.findFirst({
      where: { id }
    }); 

    (todo)
      ? res.json(todo)
      : res.status(404).json({ error: 'not found' });
    
  }

  public createTodo = async (req: Request , res: Response) => {

    const [error, createTodoDto] = CreateTodoDto.create( req.body )

    console.log(createTodoDto)
    if ( error ) return res.status(400).json({ error })


    const todo = await prisma.todo.create({
      data: createTodoDto!
    });

    res.json({todo})
  }

  public updateTodo = async (  req: Request, res: Response) => {

    const id = +req.params.id

    const [ error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id })

    if ( error ) return res.status(400).json({ error })

    const todo = await prisma.todo.findFirst({
      where: { id }
    }); 

    if ( !todo ) return res.status(400).json({ error: 'not found' }); 

    
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: updateTodoDto!.values
    })


    res.json( updateTodoDto  )
  }


  public deleteTodo  = async ( req: Request, res: Response )=>{
    const id = +req.params.id;
    
    const todo = await prisma.todo.findFirst({
      where: { id }
    }); 

    if(!todo) return res.status(404).json({error:'Not found'})


    const deleted = await prisma.todo.delete({
      where: { id }
    });

    ( deleted )
      ? res.json( deleted )
      : res.status(400).json({ error: 'todo with id not find'})



    res.json( { todo, deleted} )

  
  }

}