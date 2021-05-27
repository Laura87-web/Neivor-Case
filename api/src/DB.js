     
require('dotenv').config();
const { Sequelize } = require('sequelize');              
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;
      
       
const sequelize = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/living`, { //****/
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const autenticar = async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
autenticar()
const sincronizar = async ()=>{

  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
}
sincronizar()

console.log("MODELOS EN SEQUELIZE DESPUES DE SINCRONIZAR",sequelize.models)


module.exports = {
   ...sequelize.models, 
   conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};