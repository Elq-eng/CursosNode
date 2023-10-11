const express = require('express');
const morgan = require('morgan');
const { create } = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const mySqlStore = require('express-mysql-session');
const { database } = require('./keys');
const passport = require('passport');


//modules expots 
const { Config } = require('./config/index');




// inicializations
const app = express();
require('./lib/passport');

//  settings
app.set('port', Config.port || 4001);
app.set('views', path.join(__dirname, 'views'))

const exphbs = create({
    exthbs: '.hbs',
    helpers: require('./lib/handlebars'),
    defaultLayout: 'main',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get('views'), 'partials'),

})

app.engine(".hbs", exphbs.engine);
app.set('view engine', '.hbs');




//middlewares
app.use(session({
    secret: 'mysqlSession',
    resave: false,
    saveUninitialized: false,
    store: new mySqlStore(database)

}))
app.use(flash())
app.use(morgan('dev')); // es para que muestre determinado msj en la consola 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());


// Global Variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user
    next();
})


// Routes
app.use(require('./routes'))
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'))

// public
app.use(express.static(path.join(__dirname, 'public')));

//  starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})