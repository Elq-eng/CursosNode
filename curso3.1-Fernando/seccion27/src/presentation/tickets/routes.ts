import { Router } from "express";
import { TicketController  } from "./controller";



export class TicketsRoutes {


  static get routes(){

    const router = Router();
    const ticketsController = new TicketController();

    router.get('/', ticketsController.getTickets);
    router.get('/last', ticketsController.getLastTicketNumber);
    router.get('/pending', ticketsController.pendingTicket);

    router.post ('/', ticketsController.createTicket);
    router.get('/draw/:desk', ticketsController.drawTicket); 
    router.put('/done/:ticketId', ticketsController.ticketFinished);
    router.get('/working-on', ticketsController.workingOn  );



    return router 

  }
}