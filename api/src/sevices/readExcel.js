const XLSX = require("xlsx")

function readExcel(ruta){
    const workbook = XLSX.readFile(ruta)
    const workbookShets = workbook.SheetNames;
    const sheet = workbookShets[0] //una hoja
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
    
    for(const itemfila of dataExcel){
        console.log(itemfila.LEYENDA , "---")
    }
    
    
}

readExcel("./src/uploads/Estado-de-cuenta.xlsx")