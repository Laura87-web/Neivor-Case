import axios from "axios"

export async function getMatch(leyenda) {
  
     const respuesta = await axios.post("http://localhost:3001/match", leyenda)
   return respuesta.data
}
    
