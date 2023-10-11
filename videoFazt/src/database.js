const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');


const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL:CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATEBASE HAS TO MANY CONNECTION');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS CLOSED')
        }
    }
    if (connection) connection.release();
    console.log('DB is Connected');

    return;
})

// esto converte callbacks en promesas 
pool.query = promisify(pool.query);


               

module.exports = pool;

    