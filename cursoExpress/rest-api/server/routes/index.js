const products = require( './products.routes' )

module.exports = ( app ) => {
  app.use('/', products)
} 