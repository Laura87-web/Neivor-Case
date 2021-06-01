

import axios from "axios"

export default function uploadExel(excel) {
   console.log("-f-FRONT- uploadExcel")
   console.log("esto es el exel FRONT",excel)
     return axios.post('http://localhost:3001/upload', {excel}) 
          
            .then(respuesta => {
               console.log("respuestaExcelUpload----------------------")
               return respuesta.data
            })
}