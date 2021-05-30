const { conn } = require('../DB.js');

// const querys = {
//     landlords : "SELECT * FROM living.landlord",
//     countBank : "SELECT * FROM living.bankaccount",
//     refer : "SELECT reference FROM living.department",

// }
async function getFragmentsOfDataBase(){
   
    try{
        const data = await conn.query("SELECT landlord.name, landlord.document, department.reference, bankaccount.bank_account FROM (((landlord INNER JOIN landlorddepartment ON landlord.id=landlorddepartment.idlandlord) INNER JOIN department ON department.id=landlorddepartment.iddepartment) INNER JOIN bankaccount ON bankaccount.id_departament=department.id)")
        return data
        //    return {

    //        landlords : await conn.query(querys.landlords),
    //        countBank : await conn.query(querys.countBank),
    //        refer : await conn.query(querys.refer)      
    //     }
    }catch{
        console.log("error: can not get DATA response from data base ----")
    }    
      
}

module.exports = getFragmentsOfDataBase