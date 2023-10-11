
const { Router } = require( 'express' )


const router = Router()


router.get( '/services', (req, res) => {
  res.render( 'services' )
})

module.exports = router