const { Router } = require('express');
const matchSearch = require("./matchSearch");
const uploadExcel = require('./uploadExcel');

const router = Router()

router.post("/match", matchSearch)
router.post("/upload", uploadExcel)

module.exports = router; 