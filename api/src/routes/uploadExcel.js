require("colors")    
const readExcel = require ("../sevices/readExcel.js")

async function  uploadExcel (req, res) {
    console.log("EN SERVER POST  x-x-x-" )
  const data = await readExcel()
  console.log("Data en el BACK",data)

  res.send(data)
}

module.exports = uploadExcel; 