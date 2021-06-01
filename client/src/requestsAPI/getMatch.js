import axios from "axios"

export function getMatch(leyenda) {
   console.log("leyenda:  ", leyenda)
     return axios.post("http://localhost:3001/match", {params: leyenda}) 
            // .then(respuesta => respuesta.json())
            .then(respuesta => {
               console.log("-------- DATA ----------",respuesta.data)
               return respuesta.data
            })
}
    
