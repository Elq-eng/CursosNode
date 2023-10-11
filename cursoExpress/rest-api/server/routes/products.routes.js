const express = require('express');

const router = express.Router();

let products = [
  {
    "name": "Cascavita",
    "Precio": "123USD",
    "id": 1
  }
]

router
  .get('/products',( req,res ) => {
    res.json(products)
  })
  .post('/products' , ( req,res ) =>{

    const newProducts = {...req.body, id: products.length + 1}
    products.push(newProducts)
    
    res.send( 'creando productos' )
  } )
  .put( '/products/:id', ( req,res )=>{
    const newData = req.body
    const prodcutFound = products.find( product => product.id ===  parseInt(req.params.id) );
    
    if( !prodcutFound ) return( res.status(404).json({ "message" : "El producto no existe" }) )

    products= products.map( p => p.id === parseInt(req.params.id) ? { ...p,...newData } : p )
    
    res.json({
       message: "product updated successfully"
    })
  })
  .delete( '/products/:id', ( req,res )=>{ 
    const prodcutFound = products.find( product => product.id ===  parseInt(req.params.id) );
    
    if( !prodcutFound ) return( res.status(404).json({ "message" : "El producto no existe" }) )
    
    products = products.filter( p=> p.id !== parseInt(req.params.id) )
    
    res.sendStatus()
  })
  .get('/products/:id',( req,res ) => {

    const prodcutFound = products.find( product => product.id ===  parseInt(req.params.id) );

    if( !prodcutFound ) return( res.status(404).json({ "message" : "El producto no existe" }) )

    res.json( prodcutFound )
  })


module.exports = router