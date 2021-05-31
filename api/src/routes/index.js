const { Router } = require('express');
const router = Router()
const matchSeaarch = require("./matchSearch")
// devolvera un objeto con los fragmentos posibles a encontrar en una leyenda
//el objeto tendra 3 propiedades
// cada propiedad guardara un array con fragmentos a encontrar en la leyenda
/* 
obj ={
    landlords : ["CARLOS", "ALMADA", "MIRTA", "RODRIGUEZ", "NICOLAS"],
    countsBank: [233434, 434344, 4343445, 66667, 766666],
    referencias: [2101, 1101, 2301, 1201]
}
*/
router.post("/match", matchSeaarch)

//------------------
// "/matcher"  recibe el obj fragments y el json de readExcel
// ejecuta la funcion matcher por cada una de las leyentas en el json
// devuelve un json con los datos para la nueva tabla a mostrar
// router.get("/matcher", matcher)



module.exports = router; 