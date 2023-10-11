const { response } = require('express');

const usuariosGet = ( req, res = response ) => {

  const query = req.query

  res.status(403).json({
      'msg': 'Get Api from controller',
      query
    })
    
}

const usuariosPost = ( req, res = response ) => {

  const body = req.body

    res.status(403).json({
        'msg': 'Post Api from controller',
        body
      })
      
}

const usuariosPut = ( req, res = response ) => {
  const id  = req.params.id
    res.status(403).json({
        'msg': 'Put Api from controller',
        id
      })
      
}

const usuariosDelete = ( req, res = response ) => {
    res.status(403).json({
        'msg': 'Delete Api from controller'
      })
      
}
module.exports ={

  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
}