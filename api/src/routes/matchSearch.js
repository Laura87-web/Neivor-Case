require("colors")    
const getFragmentsOfDataBase = require("../sevices/getFragmentsOfDataBase");
const matcher = require('../sevices/matcher.js');

async function  matchSearch (req, res){
    console.log("-f- matcherSearch".yellow)
    
    const leyenda = req.body.params
    
    const fragments = await getFragmentsOfDataBase()
    // console.log("fraagmnets -----zzz ", fragments[0])
    
    //matching devuelve un objeto con los datos requeridos o "no hubo coincidencias"
    const matching = await matcher(fragments[0], leyenda) //dejo el await.. eventualemete leera un libro excel en vez de un string
        
    res.send(matching)
}


module.exports = matchSearch; 