import { Ticket } from "../../domain/interfaces/ticket";
import { UuiAdapter  } from '../../config/uuid.adapter';
import { WssService } from "./wss.services";


export class TicketService {

  constructor( 
    private readonly wssService = WssService.instance,
    ){}


  public _tickets:Ticket []=[

    { id: UuiAdapter.v4(), number: 1, createAt: new Date(), done: false },
    { id: UuiAdapter.v4(), number: 2, createAt: new Date(), done: false },
    { id: UuiAdapter.v4(), number: 3, createAt: new Date(), done: false },
    { id: UuiAdapter.v4(), number: 4, createAt: new Date(), done: false },
    { id: UuiAdapter.v4(), number: 5, createAt: new Date(), done: false },
    { id: UuiAdapter.v4(), number: 6, createAt: new Date(), done: false },
  ];

  private readonly workingOnTicket: Ticket[]=[];
  
  public get pendingTickets():Ticket[] {
    return this._tickets.filter( ticket => !ticket.handleAtDesk );
  }

  public get lastWorkingOnTicket():Ticket[]{
    return this.workingOnTicket.slice(0,4);
  }

  public get lastTicketNumber():number {
    return this._tickets.length > 0 ? this._tickets.at(-1)!.number : 0 
  }

  public createTicket() {

    const ticket: Ticket ={
      id: UuiAdapter.v4(),
      number: this.lastTicketNumber + 1,
      createAt: new Date(),
      done: false,
      handleAt: undefined,
      handleAtDesk: undefined,
    }

    this._tickets.push( ticket )
    //nuevo ticket TODO: 
    this.onTicketNumberChanged();
    return ticket;
  }

  public drawTicket( desk: string ){

    const ticket = this._tickets.find( ticket => !ticket.handleAtDesk);
    if ( !ticket ) return { status : 'error', message: 'No hay tickets pendientes'}
    ticket.handleAtDesk = desk;
    ticket.handleAt = new Date();

    this.workingOnTicket.unshift({...ticket})
    this.onTicketNumberChanged();
    this.onWorkOnChanged();
  
    return { status: 'ok', ticket}
  }

  public onFinishedTicket( id: string ){
    const ticket = this._tickets.find( t => t.id === id );

    if( ! ticket ) return { status : 'error', message: 'Ticket no encontrado'}
  
    this._tickets = this._tickets.map( ticket => {
      if( ticket.id === id ){
        ticket.done = true;
      }
      return ticket
    })

    return { status: 'ok' }
  
  } 

  private onTicketNumberChanged(){
    this.wssService.sendMessage('on-ticket-number-changed', this.pendingTickets.length);
  }

  private onWorkOnChanged(){
    this.wssService.sendMessage('on-working-changed', this.lastWorkingOnTicket)
  }


}