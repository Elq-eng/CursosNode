// import library
const express = require('express')
require('dotenv').config()
const { create } = require('express-handlebars');
const path = require('path');
// export routes
const routes = require('./v1/routes')

// create instance
const app = express()

// create variables
const PORT = process.env.PORT || 8080
const expHbs = create({
  exthbs: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views/partials"
})


// views
app.engine('.hbs',expHbs.engine )
app.set('view engine', '.hbs');
app.set("views", __dirname + "/views/pages");

// validation route
routes( app )


// port number
app.listen(PORT, () => { 

  console.log("(ง🔥ﾛ🔥)ง , server listening on port " + PORT)

})