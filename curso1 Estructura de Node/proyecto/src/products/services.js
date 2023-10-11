const { ObjectId } = require('mongodb')
const { Database } = require('../database/index');
const debug = require('debug')('app:esta fallando en create');
const { productsUtils } = require('./utils')

const COLLECTION = 'products'


const getAll = async() => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async(id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id: ObjectId(id) })
}

const create = async(product) => {
    debug(product)

    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;

}


const generateReport = async(name, res) => {
    let products = await getAll()
    productsUtils.excelGenerator(products, name, res)
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport
}