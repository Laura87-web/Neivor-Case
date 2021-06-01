const { Router } = require('express');
const  uploadExel = require('./uploadExcel');
const matchSeaarch = require("./matchSearch")

const router = Router()

// "/match"
// devolvera un objeto con los fragmentos posibles a encontrar en una leyenda
router.post("/match", matchSeaarch)

//------------------
router.post("/upload", uploadExel)
// "/matcher"  recibe el archivo Excel
// ejecuta la funcion matcher por cada una de las leyentas en el json
// devuelve un json con los datos para la nueva tabla a mostrar

module.exports = router; 