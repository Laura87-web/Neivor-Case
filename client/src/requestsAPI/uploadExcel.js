

import axios from "axios"

export default function uploadExel() {

   // const f = new FormData()
   // f.append("file", excel)
   // console.log("formData--f-----",f)
 
     return axios.post('http://localhost:3001/upload')
            .then(respuesta => {
               // console.log("--FRONT--", respuesta.data)
               return respuesta.data
            })
            .catch(error =>{console.log(error)})
}

//{headers: {"content-type":"multipart/form-data"}}