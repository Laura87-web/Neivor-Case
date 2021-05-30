const { conn } = require('../DB.js');

const querys = {
    landlords : "SELECT * FROM living.landlord",
    countBank : "SELECT * FROM living.bankaccount",
    refer : "SELECT reference FROM living.department",

}
async function getFragmentsOfDataBase(){
   
    try{
       return {

           landlords : await conn.query(querys.landlords),
           countBank : await conn.query(querys.countBank),
           refer : await conn.query(querys.refer)      
        }
    }catch{
        console.log("error: can not get DATA response from data base ----")
    }    
      
}

module.exports = getFragmentsOfDataBase