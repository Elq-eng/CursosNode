const { Router }  = require('express');
const { usuariosGet,usuariosPost,usuariosPut,usuariosDelete } = require('../controllers/users')


const router = Router()


    // get
  router.get('/', usuariosGet )


  // post
  router.post('/',usuariosPost)


  // put
  router.put('/:id', usuariosPut )  


  // delete
  router.delete('/', usuariosDelete )  

  


module.exports = router

