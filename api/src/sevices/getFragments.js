const { conn } = require('../DB.js');

const querys = {
    landlords : "SELECT name FROM living.landlord",
    countBank : "SELECT * FROM living.bankaccount",
    refer : "SELECT reference FROM living.department",

}

async function  getFragments (req, res){
   console.log("EL BODY-----", req.body)
    let landlords;
    let countBank;
    let refer;   
    try{
      landlords = await conn.query(querys.landlords)
      countBank = await conn.query(querys.countBank)
      refer = await conn.query(querys.refer)      
    }catch{
        console.log("error: can not response of data base ----")
    }

    const obj = {
        landlords,
        countBank,
        refer
    }         
    res.send(obj)
}


module.exports = getFragments; 