const express = require("express");
const morgan = require("morgan");
const path = require("path");
require('ejs')
const app = express();



app.use(express.text());
app.use(express.json());






// *Rutas estaticas

// app.use(express.static('./static'))

// * settings
app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname, 'view'));
// app.set('appName' , 'Express Cpurse')
// app.set('port', 4000)


// ! ruta de prueba
app.get( '/', (req, res)=>{
  res.render('index')
})

app.get( '/dashboard', (req, res)=>{
  res.render('dashboard')
})

// * middleware

// app.use( ( req, res, next )  => {
//   console.log( 'pas por aqui' );
//   next()
// })

// app.use(morgan('dev'))

// app.use( ( req, res, next )  => {
//   if( req.query.login === 'fazt1234' ){
//     next()
//   }
//   else{
//     res.send( 'Not Authorized ' )
//   }
  
// })

// app.get( '/dashboard', ( req, res, next )  => {
//   res.send('Dashboard welcome!')
// })

// app.get( '/profile' , ( req, res ) => { 

//   res.send( 'Profile page' )
// } )


// * metodo all
// app.all( '/' , ( req,res ) =>{
//   console.log('Ruta funciona para todos');
// } )


// * querys
// app.get( '/search' ,  ( req,res ) =>{

//   if( req.query.q  === ' javascript  books ' ){ 
//     res.send( 'lista de libros de js' )
//   } 
//   else{
//     res.send( 'pagina normal' )
//   }

// } )

// * peticiones normales

// app.post( '/user/:user' , ( req,res ) =>{
//   console.log( );
//   res.send( `nuevo usuario ${req.params.user}` )
// })

// *  el servidor esta vivo

// app.get( '/isAlive' , ( req,res ) =>{
//   res.sendStatus(204)
// })



app.listen(3000);
console.log("server on port ");
