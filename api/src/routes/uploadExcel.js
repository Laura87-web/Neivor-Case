require("colors")    
const getFragmentsOfDataBase = require("../sevices/getFragmentsOfDataBase");
const matcher = require('../sevices/matcher.js');

async function  uploadExcel (req, res){
    console.log("-f- uploadExcel".cyan)
    
    
    // const fragments = await getFragmentsOfDataBase()
    // // console.log("fraagmnets -----zzz ", fragments[0])
    
    // //matching devuelve un objeto con los datos requeridos o "no hubo coincidencias"
    // const matching = await matcher(fragments[0], leyenda) //dejo el await.. eventualemete leera un libro excel en vez de un string
        
    // res.send(matching)
    let EDFile = req.files.file
    EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
}


module.exports = uploadExcel; 