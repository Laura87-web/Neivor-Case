import axios from "axios"

export function getMatch(leyenda) {
   console.log("leyenda:  ", leyenda)
     return axios.post("http://localhost:3001", {params: leyenda}) //fetch "nativo de react"
            // .then(respuesta => respuesta.json())
            .then(respuesta => {
               console.log(respuesta.data)
            })
}
    
