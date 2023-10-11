require('dotenv').config()
const express = require('express')
var hbs = require('hbs');

const app = express()
port = process.env.PORT 

// handlebars
app.set('view engine','hbs')
hbs.registerPartials( __dirname + '/views/partials' ); 

// servir contido estatico midleware
app.use( express.static('public'))


app.get('/', function(req, res){

  res.render('home', { nombre : 'Elquin Cascavita'})
})


app.get('/generic', function (req, res) { 
  res.render('generic')
})

app.get('/element', function (req, res) { 
  res.render('element')
})


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})
app.listen( port, () => {
  console.log(`la aplicacion esta corriendo en el puerto ${port}`);
})
