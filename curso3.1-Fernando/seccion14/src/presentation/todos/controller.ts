import { Request, Response } from "express"





const todos = [
  { id:1, text: 'Buy milk', createdAt: new Date() },
  { id:2, text: 'Buy bread', createdAt: null },
  { id:3, text: 'Buy butter', createdAt: new Date() }
]


export class TodosController {


  // * Dependence Injection
  constructor(){

  }

  public getTodos = (req: Request, res: Response  ) => {
    return res.json(todos)
  }


  public getTodosById = (req: Request, res: Response) =>{
    
    const id = +req.params.id
    if ( isNaN(id)) return res.status(400).json({ error: 'not found' }); 
    const todo = todos.find( todoid => todoid.id === id);

    (todo)
      ? res.json(todo)
      : res.status(404).json({ error: 'not found' });
    
  }

  public createTodo = (req: Request , res: Response) => {

    const { text } = req.body;

    if( !text ) return res.status(400).json({ error:'Text property is required'}) 

    const todo = {
      id: todos.length + 1,
      text,
      createdAt: null 
    }

    todos.push( todo )
    res.json({todos})
  }

  public updateTodo= (  req: Request, res: Response) => {

    const id = +req.params.id
    if ( isNaN(id)) return res.status(400).json({ error: 'not found' }); 

    const todo = todos.find( todoid => todoid.id === id)
    if ( !todo ) return res.status(400).json({ error: 'not found' }); 

    const { text, createdAt } = req.body

    todo.text = text || todo.text;
    ( createdAt === 'null')
      ? todo.createdAt = null
      : todo.createdAt = new Date( createdAt || todo.createdAt);
    // ! OJO REFERENCIA


    res.json( todo )
  }


  public deleteTodo  = ( req: Request, res: Response )=>{
    const id = +req.params.id;
    
    const todo = todos.find( todo => todo.id === id );

    if(!todo) return res.status(404).json({error:'Not found'})

    todos.splice( todos.indexOf(todo),1)
    res.json( todo )

  
  }

}