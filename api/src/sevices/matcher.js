//esta funcion recibira una linea LEYENDA
// y comprobara si existe alguna coincidencia con el obj de fragments
// de haber coincidencia hace la query relacional para traer todos los datos relacionados a ese pago
const typeOfMatch = require( "./typeOfMatch")
const { conn } = require('../DB.js');

 async function matcher(fragments, leyenda){
    console.log("- matcher".yellow)
         
   const coincidencia = typeOfMatch(fragments,leyenda)
   console.log("coincidencia --->",coincidencia)

//   let str = await "SELECT landlord.name, landlord.document, department.reference  FROM ((landlord  INNER JOIN andlorddepartment  ON landlord.id = landlorddepartment.idlandlord)  INNER JOIN department ON epartment.id = landlorddepartment.iddepartment)"
//   const strResponse = await conn.query(str) 
//   switch (coincidencia.match) {
//        case "reference_dep":
//            str = "query por reference_dep"
//            break;
//         case  "bank_account":
//             str = "query por bank_account"
//             break;
//        case "coincide_dni":
//            str = "query por dni"
//            break;
//         case "coincide_nombre":
//             str = str +  "where landlord.id = 4;"
//             break;
//        default:
//            str = "NO SE ENCONTRARON COINCIDENCIAS EN LA DB"
//            break;
//    }
  
   
   

     return coincidencia
}

module.exports = matcher