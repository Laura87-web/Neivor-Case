const getFragmentsOfDataBase = require("../sevices/fragments");
const matcher = require('../sevices/matcher.js');

async function  matchSearch (req, res){
    console.log("EL BODY-----", req.body)
    const leyenda = req.body.params
    const fragments = await getFragmentsOfDataBase()
    // console.log(fragments)
    
    //matching devuelve true o false y un objeto con los datos requeridos en caso de ser true
    const matching = await matcher(fragments, leyenda) //dejo el await.. eventualemete leera un libro excel en vez de un string
    console.log("matchingDevuelto a la ruta --- >",matching)


    res.send(matching)
}


module.exports = matchSearch; 