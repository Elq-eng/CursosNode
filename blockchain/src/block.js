const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');


// clase de bloque 
class Block {

    constructor(data) {
            this.hash = null; //se calcula con todos los datos de los blockchain
            this.heiht = 0; //numero de bloque 
            this.body = Buffer.from(JSON.stringify(data).toString('hex')); // lo que ingresa al dato
            this.time = 0;
            this.previousBlockHash = '';
        }
        // validar que el hash no se repita
    validate() {
            const self = this;
            return new Promise((resolve, reject) => {
                let currentHash = self.hash;

                self.hash = SHA256(JSON.stringify({...self, hash: null })).toString();

                if (currentHash !== self.hash) {
                    return resolve(false)
                }
                resolve(true);
            })
        }
        // ver los datos del bloque
    getBlockData() {
        const self = this;
        return new Promise((resolve, reject) => {
            let encodedData = self.body;
            let decodedData = hex2ascii(encodedData);
            let dataObject = JSON.parse(decodedData);

            if (dataObject === "Genesis Block") {
                reject(new Error("This is the Genesis Block"))
            }

            resolve(dataObject);
        })
    }

    toString() {
        const { hash, height, body, time, previousBlockHash } = this;
        return ` Block - 
      hash: ${hash}
      height: ${height}
      body: ${body}
      time: ${time}
      previousBlockHash: ${previousBlockHash}
      ----------------------------------------------`
    }

}


module.exports = Block;