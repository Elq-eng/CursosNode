
const lblOnline   = document.querySelector('#lblOnline');
const lblOffline  = document.querySelector('#lblOffline');
const txtMensaje  = document.querySelector('#txtMensaje')
const btnEnviar   = document.querySelector('#btnEnviar')


const socket = io()


socket.on('connect',()=> {
  console.log('Conectado')

  lblOnline.style.display = '';
  lblOffline.style.display = 'none';

} )

socket.on('disconnect',()=> {
  console.log('Desconectado')
  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
})

socket.on('enviar-mensaje',( paylod )=> {
  console.log( paylod )
})


btnEnviar.addEventListener( 'click', ()=> {
  const mensaje = txtMensaje.value

  const payload ={
    mensaje : mensaje,
    id: 'hasdjhfkjsdh',
    fecha : new Date().getTime()
  }
  
  socket.emit('enviar-mensaje', payload, ( id )=> {
    console.log('desde el server', id)
  })
})