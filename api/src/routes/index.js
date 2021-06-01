const { Router } = require('express');
const matchSearch = require("./matchSearch")

const router = Router()

router.post("/match", matchSearch)

module.exports = router; 


//------------------
const  uploadExel = require('./uploadExcel');
// router.post("/upload", uploadExel)
// "/matcher"  recibe el archivo Excel
// ejecuta la funcion matcher por cada una de las leyentas en el json
// devuelve un json con los datos para la nueva tabla a mostrar