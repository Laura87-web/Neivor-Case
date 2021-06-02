const { conn } = require('../DB.js');

async function getFragmentsOfDataBase(){
    console.log("-2- getFragmentsOfDataBase".yellow)
   
    try{
        const data = await conn.query("SELECT landlord.name, landlord.document, department.reference, bankaccount.bank_account FROM (((landlord INNER JOIN landlorddepartment ON landlord.id=landlorddepartment.idlandlord) INNER JOIN department ON department.id=landlorddepartment.iddepartment) INNER JOIN bankaccount ON bankaccount.id_departament=department.id)")
        return data
       
    }catch{
        console.log("error: can not get DATA response from data base ----")
    }    
      
}

module.exports = getFragmentsOfDataBase