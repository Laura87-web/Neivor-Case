

import axios from "axios"

export function uploadExel() {
   
     return axios.post("http://localhost:3001/upload") 
          
            .then(respuesta => {
               
               return respuesta.data
            })
}