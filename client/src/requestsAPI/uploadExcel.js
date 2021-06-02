

import axios from "axios"

export default function uploadExel(excel) {
 
     return axios.post('http://localhost:3001/upload', {excel}) 
          
            .then(respuesta => {
               console.log("respuestaExcelUpload----------------------")
               return respuesta.data
            })
}