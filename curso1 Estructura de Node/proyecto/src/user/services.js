const { ObjectId } = require('mongodb')
const { Database } = require('../database/index');
const debug = require('debug')('app:esta fallando en create');

const COLLECTION = 'user'


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



module.exports.UserService = {
    getAll,
    getById,
    create
}