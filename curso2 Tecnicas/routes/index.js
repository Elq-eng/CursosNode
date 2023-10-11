const authRouter = require('./auth');
const movieRouter = require('./movie');
const commentRouter = require('./comments')

module.exports = (app) => {

    app.use('/auth', authRouter)
    app.use(movieRouter)
    app.use('commentRouter')
}