const { Router } = require( 'express' )


const router = Router()


router.get( '/store', (req, res) => {
  res.render( 'store' )
})

module.exports = router