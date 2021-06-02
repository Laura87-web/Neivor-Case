require("colors")    
const getFragmentsOfDataBase = require("../sevices/getFragmentsOfDataBase");
const matcher = require('../sevices/matcher.js');

async function  matchSearch (req, res){    
    console.log("-1- matcherSearch".yellow)   
    // console.log("lo que trae el body:",req.body)    
   
    try {
        const leyenda = req.body.params    
        const fragments = await getFragmentsOfDataBase()        
        const matching = await matcher(fragments[0], leyenda) 
        // console.log("matching es: ", matching)
        
        res.send(matching)
        
    } catch (error) {
       
        res.status(404).send(error)
    }    
    
}

module.exports = matchSearch; 
