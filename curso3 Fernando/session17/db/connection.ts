import { Sequelize } from 'sequelize'



const db = new Sequelize('nodeFernando', 'root', '3194932527je',{
  host: 'localhost',
  dialect:'mysql',

})


export default db