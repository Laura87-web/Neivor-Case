const getFragmentsOfDataBase = require("../sevices/getFragmentsOfDataBase");
const matcher = require('../sevices/matcher.js');

async function  matchSearch (req, res){        
    try {
        const leyenda = req.body.params    
        const fragments = await getFragmentsOfDataBase()        
        const matching = await matcher(fragments[0], leyenda) 
        
        res.send(matching)
        
    } catch (error) {
       
        res.status(404).send(error)
    }    
    
}

module.exports = matchSearch; 


// console.log("-f- matcherSearch".yellow)
// require("colors")    