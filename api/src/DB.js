require("colors")     
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const { Sequelize } = require('sequelize');   

const sequelize = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/living`, { //****/
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  
});

const autenticar = async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection DB has been established successfully.'.blue);
  } catch (error) {
    console.error(('Unable to connect to the database:').red);
  }
}; autenticar()


module.exports = {
   conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};