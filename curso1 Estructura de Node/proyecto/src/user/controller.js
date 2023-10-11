const { UserService } = require('./services')
const debug = require('debug')('app:module- user-controller')
const { Response } = require('../common/response')
const createError = require('http-errors')

module.exports.UserController = {
    getUsers: async(req, res) => {
        try {
            let products = await UserService.getAll();
            res.json(products)
            Response.success(res, 200, 'Lista de productos', products)
        } catch (e) {
            debug(e)
            res.status(500).json({ message: 'Internal server error' })
            Response.error(res)
        }
    },
    getUser: async(req, res) => {
        try {
            const { params: { id } } = req;
            let user = await UserService.getById(id)
            res.json(user)
            if (!user) {
                Response.error(res, new createError.NotFound)
            } else {

                Response.success(res, 200, 'Usuarios', user)
            }
        } catch (e) {
            debug(e)
            res.status(500).json({ message: 'Internal server error' })
            Response.error(res)
        }

    },
    createUser: async(req, res) => {

        try {
            const { body } = req;

            if (!body || Object.keys(body).length) {
                Response.error(res, new createError.BadRequest())

            } else {

                const insertedId = await UserService.create(body)
                res.json(insertedId)
                Response.success(res, 201, 'Usuario agregado', insertedId)
            }

        } catch (e) {
            debug(e)
            res.status(500).json({ message: 'Internal server error' })
            Response.error(res)
        }

    }
}