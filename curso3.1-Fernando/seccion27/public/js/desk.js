
const lblPending = document.querySelector('#lbl-pending');
const deskHeader  = document.querySelector('h1');
const noMoreAlert = document.querySelector('.alert');
const lblCurrentTicket = document.querySelector('small');

const searchParams = new URLSearchParams( window.location.search );


const btnDraw = document.querySelector('#btn-draw');
const btnDone = document.querySelector('#btn-done');


if ( !searchParams.has('escritorio')){
  window.location = 'index.html'
  throw new Error('Escritoio es requerido')
}

const deskNumber = searchParams.get('escritorio');
let workingTicket = null;
deskHeader.innerHTML = deskNumber


function checkTicketCount( currentCount = 0  ){
  // noMoreAlert.classList.toggle('d-none');
  if( currentCount === 0 ){
    noMoreAlert.classList.remove('d-none');
  }else{
    noMoreAlert.classList.add('d-none');
  }
  lblPending.innetHTML = currentCount; 
}

async function loadInitCount(){
  const pendingTicket  = await fetch('/api/ticket/pending').then( resp => resp.json());
  checkTicketCount( pendingTicket );
}

async function getTicket(){

  await finishTicket();

  const { status, ticket, message } =  await fetch(`/api/ticket/draw/${ deskNumber }`).then( resp => resp.json());

  if( status === 'error'){
    lblCurrentTicket.innerHTMLL = message;
    return;
  }

  workingTicket = ticket;
  lblCurrentTicket.innerText = ticket.number;

}

async function finishTicket(){
  if( !workingTicket ) return;

  const { status, message } = await fetch(`/api/ticket/done/${ workingTicket.id }`, {
    method: 'PUT'
  }).then( resp => resp.json());
  
  console.log({ status, message });

  if( status === 'ok' ){
    workingTicket = null;
    lblCurrentTicket.innerText = 'Nadie'; 
  }


}


function connectToWebSockets() {

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    
    const { type, payload} = JSON.parse( event.data );
    if( type !== 'on-ticket-number-changed') return;
    lblPending.innerHTML = payload; 
    checkTicketCount( payload );
  };

  socket.onclose = ( event ) => {
    console.log( 'Connection closed' );
    setTimeout( () => {
      console.log( 'retrying to connect' );
      connectToWebSockets();
    }, 1500 );

  };

  socket.onopen = ( event ) => {
    console.log( 'Connected' );
  };

}


btnDraw.addEventListener( 'click', getTicket )



loadInitCount()
connectToWebSockets();