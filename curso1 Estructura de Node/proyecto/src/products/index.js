const express = require('express');
const router = express.Router();
const debug = require('debug')('app: modulo index produuctos');

const { ProductsController } = require('./controller')


module.exports.ProductsAPI = (app) => {

    router
        .get('/', ProductsController.getProducts)
        .get("/report", ProductsController.generarReport)
        .get('/:id', ProductsController.getProduct)
        .post('/', ProductsController.createProduct)

    app.use('/api/products', router)

}