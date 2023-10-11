const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config/index')
const { ProductsAPI } = require('./src/products/index')
const { UsersAPI } = require('./src/user/index')
const { IndexApi, NotFoundApi } = require('./src/index/index')

const app = express();

app.use(express.json());

IndexApi(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundApi(app);

app.listen(Config.port, () => {
    debug('Servidor escuchando en el puerto ')
})