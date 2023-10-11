const { ProductsService } = require('./services')
const debug = require('debug')('app:module- products-controller')
const { Response } = require('../common/response')
const createError = require('http-errors')

module.exports.ProductsController = {
    getProducts: async(req, res) => {
        try {
            let products = await ProductsService.getAll();
            res.json(products)
            Response.success(res, 200, 'Lista de productos', products)
        } catch (e) {
            debug(e)
            res.status(500).json({ message: 'Internal server error' })
            Response.error(res)
        }
    },
    getProduct: async(req, res) => {
        try {
            const { params: { id } } = req;
            let produt = await ProductsService.getById(id)
            res.json(produt)
            if (!produt) {
                Response.error(res, new createError.NotFound)
            } else {

                Response.success(res, 200, 'Producto', produt)
            }
        } catch (e) {
            debug(e)
            res.status(500).json({ message: 'Internal server error' })
            Response.error(res)
        }

    },
    createProduct: async(req, res) => {

        try {
            const { body } = req;

            if (!body || Object.keys(body).length) {
                Response.error(res, new createError.BadRequest())

            } else {

                const insertedId = await ProductsService.create(body)
                res.json(insertedId)
                Response.success(res, 201, 'Producto agregado', insertedId)
            }

        } catch (e) {
            debug(e)
            res.status(500).json({ message: 'Internal server error' })
            Response.error(res)
        }

    },
    generarReport: (req, res) => {
        try {
            ProductsService.generateReport('Inventario', res);

        } catch (e) {
            debug(error)
            Response.error(res)
        }
    }
}