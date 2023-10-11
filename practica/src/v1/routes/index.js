const home = require('./home.routes')
const blog = require('./blog.routes')
const plans = require('./plans.routes')
const services = require('./services.routes')
const store = require('./store.routes')

module.exports = ( app ) => {
  app.use( home )
  app.use( blog )
  app.use( plans )
  app.use( services )
  app.use( store )
}