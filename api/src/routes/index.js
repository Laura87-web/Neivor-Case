const { Router } = require('express');
const router = Router();
const { conn } = require('../DB.js');

const querys = {
    landlords : "SELECT * FROM living.landlord",
    countBank : "SELECT * FROM living.bankaccount",
    department : "SELECT * FROM living.department",
}

router.get("/", async(req, res)=>{
    const data = req.body
    var resultados;
   
   
    try{
      resultados = await conn.query(querys.landlords);
                

   }catch{
    console.log("no se encontro")
   }
    res.send(resultados)
})


module.exports = router; 