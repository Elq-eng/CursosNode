const express = require('express');
const router = express.Router();
const debug = require('debug')('app: modulo index produuctos');

const { UserController } = require('./controller')


module.exports.UsersAPI = (app) => {

    router
        .get('/', UserController.getUsers)
        .get('/:id', UserController.getUser)
        .post('/', UserController.createUser)

    app.use('/api/users', router)

}