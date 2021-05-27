const { Router } = require('express');
const router = Router();
const { Landlord, Department, BankAcount } = require('../DB.js');


router.use("/", async(req, res)=>{
    const data = req.body
   try{
       const users = await Landlord.FindAll()
    //    const dogies = await Raza.findAll({ where: { name: name } })
       console.log(users)

   }catch{
    console.log("no se encontro user")
   }
    res.send("<h1>estas en la pag pral</h1>")
})


module.exports = router; 