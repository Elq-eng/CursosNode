
const { Router } = require( 'express' )


const router = Router()


router.get( '/plans', (req, res) => {
  res.render( 'plans' )
})

module.exports = router