
const axios = require('axios');

class Busquedas {

  historial = [];

  constructor(){

      

  }

  async ciudad( lugar = '' ){
    
    const resp = await axios.get('https://reqres.in/api/users?page=2')
    console.log(resp);
    
    return []
  }

}


module.exports = Busquedas;


