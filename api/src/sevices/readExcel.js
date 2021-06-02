const XLSX = require("xlsx");
const getFragmentsOfDataBase = require("./getFragmentsOfDataBase");
const matcher = require("./matcher");

async function readExcel(){
    try {        
        const fragments = await getFragmentsOfDataBase()

        // console.log("en readEc SERCICES")
        const workbook = XLSX.readFile(__dirname + "/Estado-de-cuenta.xlsx")
        // console.log("wwwwwwwwwwww",workbook)
        const workbookShets = workbook.SheetNames;
        const sheet = workbookShets[0] //una hoja
        const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
        let arrMatch =[]
        for(const itemfila of dataExcel){
            //LEYENDA es el nombre de la columna en el excel donde estan listadas todas las leyendas
            // console.log(itemfila.LEYENDA , "---") 
            // console.log("fragments",fragments[0])
           coincidencia = await matcher(fragments[0] , itemfila.LEYENDA )
            arrMatch.push(coincidencia)
        }
        // console.log("arrMatch--->>>>", arrMatch)
        return arrMatch
        
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = readExcel