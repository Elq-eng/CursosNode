const { Router } = require('express');
const routes = Router()

routes.get('/blog', ( req,res )=> {

  res.render( 'blog' )
})


module.exports = routes

