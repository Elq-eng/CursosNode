const { postLogin } = require('./auth/login');
const { postSignup } = require('./auth/signup');
const { getMovies, getOneMovie } = require('./movieC');
const { postComment } = require('./commentC');

module.exports = {
    postLogin,
    getMovies,
    getOneMovie,
    postSignup,
    postComment
}