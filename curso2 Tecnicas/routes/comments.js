const { Router } = requre('express');
const { postComment } = require('../controllers')


const router = Router();


router.post('/createComment/:movieId', postComment)


module.exports = router;