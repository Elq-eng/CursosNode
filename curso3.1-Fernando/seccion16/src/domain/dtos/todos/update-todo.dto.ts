




export class UpdateTodoDto {
  private constructor(
    public readonly id: number,
    public readonly text?: string,
    public readonly completeAt?: string,
  ){}


  get values(){
    const returnObj : {[key: string]: any} = {};
  
    if( this.text ) returnObj.text = this.text;
    if( this.completeAt ) returnObj.completeAt = this.completeAt;

    return returnObj;
  
  
  }


  static create( props: {[ key:string]: any }): [string?,UpdateTodoDto?] {

    const  { id,text, completeAt } = props;
    let newCompleteAt = completeAt

    if(!id || isNaN( Number(id) )){
      return ['id must be a number'  ]
    }


    if( completeAt ){
      newCompleteAt = new Date(completeAt)
      if( newCompleteAt.toString() === 'Invalid Date'){
        return ['CompleteAt must be a valid date']
      }
    }




    return [undefined, new UpdateTodoDto(id,text, completeAt)]
  }

}