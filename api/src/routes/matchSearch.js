require("colors")    
const getFragmentsOfDataBase = require("../sevices/getFragmentsOfDataBase");
const matcher = require('../sevices/matcher.js');

async function  matchSearch (req, res){
    console.log("- matcherSearch".yellow)
    const leyenda = req.body.params
    
    const fragments = await getFragmentsOfDataBase()
    console.log("fraagmnets -----zzz ", fragments[0])
    
    //matching devuelve true o false y un objeto con los datos requeridos en caso de ser true
    const matching = await matcher(fragments[0], leyenda) //dejo el await.. eventualemete leera un libro excel en vez de un string
    // console.log("matchingDevuelto a la ruta --- >",matching)

   

    //formato de respuesta:
    // departamento 2201 - nombre propietario - 3584945 - ALVARO CARDOZO
    res.send(matching)
}


module.exports = matchSearch; 