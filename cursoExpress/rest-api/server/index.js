require('dotenv').config()
const PORT = process.env.PORT
const express = require( 'express' );
const morgan = require( 'morgan' );
const routes = require( './routes' )




const app = express();

app.use( morgan('dev') )
app.use( express.json() );

app.set( 'nombre de la aplicacion', 'Express Course')
 

routes(app)


app.listen(PORT, () =>{
 console.log( "Server starting... (ง🔥ﾛ🔥)ง ")
})

console.log("🚀 ~ file: server.js ~ line 8 ~ process.env.PORT", PORT)
